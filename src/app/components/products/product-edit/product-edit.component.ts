import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../../services/products.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { EventDrivenService } from '../../../services/event.driven.service'
import { ProductsActionsTypes } from 'src/app/state/product.state'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productId: number
  productFormGroup?: FormGroup
  submitted: boolean = false
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private eventDrivenService: EventDrivenService,
  ) {
    this.productId = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(
      (product) =>
        (this.productFormGroup = this.fb.group({
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required],
        })),
    )
  }

  onEditProduct() {
    this.submitted = true
    this.productService
      .editProduct({ ...this.productFormGroup?.value, id: this.productId })
      .subscribe((product) => {
        this.eventDrivenService.publishEvent({
          type: ProductsActionsTypes.PRODUCT_UPDATED,
        })
        alert('Success Product updated')
      })
  }
}
