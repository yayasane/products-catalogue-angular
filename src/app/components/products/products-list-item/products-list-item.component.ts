import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Product } from 'src/app/models/product.model'
import { ActionEvent, ProductsActionsTypes } from '../../../state/product.state'

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.css'],
})
export class ProductsListItemComponent implements OnInit {
  @Input() product?: Product
  @Output() productsEventEmitter = new EventEmitter<ActionEvent>()
  constructor() {}

  ngOnInit(): void {}

  onSelectProduct(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductsActionsTypes.SELECT_PRODUCT,
      payload: p,
    })
  }

  onEdit(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductsActionsTypes.EDIT_PRODUCT,
      payload: p,
    })
  }

  onDelete(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductsActionsTypes.DELETE_PRODUCT,
      payload: p,
    })
  }
}
