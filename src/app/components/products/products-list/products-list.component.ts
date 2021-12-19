import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core'
import { Product } from 'src/app/models/product.model'
import { AppDataState, DataStateEnum } from 'src/app/state/product.state'
import { Observable } from 'rxjs'
import { ActionEvent, ProductsActionsTypes } from '../../../state/product.state'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$?: Observable<AppDataState<Product[]>>
  // @Output() productsEventEmitter = new EventEmitter<ActionEvent>()

  readonly DataStateEnum = DataStateEnum
  constructor() {}

  ngOnInit(): void {}

  /* onSelectProduct(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductsActionsTypes.SELECT_PRODUCT,
      payload: p,
    })
  }

  onDelete(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductsActionsTypes.DELETE_PRODUCT,
      payload: p,
    })
  }

  onEdit(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductsActionsTypes.EDIT_PRODUCT,
      payload: p,
    })
  } */

  /* onActionEvent($event: ActionEvent) {
    this.productsEventEmitter.emit($event)
    
  } */
}
