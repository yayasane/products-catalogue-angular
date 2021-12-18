import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../services/products.service'
import { Product } from '../../models/product.model'
import { catchError, map, Observable, of, startWith } from 'rxjs'
import { AppDataState, DataStateEnum } from 'src/app/state/product.state'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$?: Observable<AppDataState<Product[]>>
  readonly DataStateEnum = DataStateEnum

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

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
}