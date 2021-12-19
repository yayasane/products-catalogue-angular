import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../services/products.service'
import { Product } from '../../models/product.model'
import { catchError, map, Observable, of, startWith } from 'rxjs'
import {
  AppDataState,
  DataStateEnum,
  ProductsActionsTypes,
} from 'src/app/state/product.state'
import { Router } from '@angular/router'
import { ActionEvent } from '../../state/product.state'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$?: Observable<AppDataState<Product[]>>
  readonly DataStateEnum = DataStateEnum

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.onGetAllProducts()
  }

  onGetAllProducts() {
    this.products$ = this.productService.getAllProducts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING, data: [] }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }),
      ),
    )
  }
  onGetSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING, data: [] }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }),
      ),
    )
  }
  onGetAvailableProducts() {
    this.products$ = this.productService.getAvailableProducts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING, data: [] }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }),
      ),
    )
  }
  onSearchProducts(dataForm: any) {
    this.products$ = this.productService.searchProducts(dataForm.keyword).pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING, data: [] }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }),
      ),
    )
  }

  onSelectProduct(p: Product) {
    this.productService.selectProduct(p).subscribe((data) => {
      p.selected = data.selected
    })
  }

  onDelete(p: Product) {
    let v = confirm('Êtes vous sûre?')
    v &&
      this.productService
        .deleteProduct(p)
        .subscribe((data) => this.onGetAllProducts())
  }

  onNewProduct() {
    this.router.navigateByUrl('/newProduct')
  }
  onEdit(p: Product) {
    this.router.navigateByUrl('/editProduct/' + p.id)
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductsActionsTypes.GET_ALL_PRODUCTS:
        this.onGetAllProducts()
        break
      case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
        this.onGetSelectedProducts()
        break
      case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
        this.onGetAvailableProducts()
        break
      case ProductsActionsTypes.SEARCH_PRODUCTS:
        this.onSearchProducts($event.payload)
        break
      case ProductsActionsTypes.NEW_PRODUCT:
        this.onNewProduct()
        break
      case ProductsActionsTypes.SELECT_PRODUCT:
        this.onSelectProduct($event.payload)
        break
      case ProductsActionsTypes.EDIT_PRODUCT:
        this.onEdit($event.payload)
        break
      case ProductsActionsTypes.DELETE_PRODUCT:
        this.onDelete($event.payload)
        break

      default:
        break
    }
  }
}
