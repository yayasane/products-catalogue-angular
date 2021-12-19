import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { EventDrivenService } from 'src/app/services/event.driven.service'
import { ProductsActionsTypes, ActionEvent } from '../../../state/product.state'

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css'],
})
export class ProductsNavbarComponent implements OnInit {
  // @Output() productEventEmiter = new EventEmitter<ActionEvent>()

  constructor(private eventDrivenService: EventDrivenService) {}

  ngOnInit(): void {}

  onGetAllProducts() {
    this.eventDrivenService.publishEvent({
      type: ProductsActionsTypes.GET_ALL_PRODUCTS,
    })
    /* this.productEventEmiter.emit({
      type: ProductsActionsTypes.GET_ALL_PRODUCTS,
    }) */
  }
  onGetSelectedProducts() {
    /* this.productEventEmiter.emit({
      type: ProductsActionsTypes.GET_SELECTED_PRODUCTS,
    }) */
    this.eventDrivenService.publishEvent({
      type: ProductsActionsTypes.GET_SELECTED_PRODUCTS,
    })
  }
  onGetAvailableProducts() {
    /* this.productEventEmiter.emit({
      type: ProductsActionsTypes.GET_AVAILABLE_PRODUCTS,
    }) */
    this.eventDrivenService.publishEvent({
      type: ProductsActionsTypes.GET_AVAILABLE_PRODUCTS,
    })
  }
  onNewProduct() {
    /* this.productEventEmiter.emit({
      type: ProductsActionsTypes.NEW_PRODUCT,
    }) */
    this.eventDrivenService.publishEvent({
      type: ProductsActionsTypes.NEW_PRODUCT,
    })
  }
  onSearchProducts(dataForm: any) {
    /* this.productEventEmiter.emit({
      type: ProductsActionsTypes.SEARCH_PRODUCTS,
      payload: dataForm,
    }) */
    this.eventDrivenService.publishEvent({
      type: ProductsActionsTypes.SEARCH_PRODUCTS,
      payload: dataForm,
    })
  }
}
