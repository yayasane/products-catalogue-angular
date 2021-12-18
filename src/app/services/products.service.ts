import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Product } from '../models/product.model'

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.host}/products`)
  }

  getSelectedProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${environment.host}/products?selected=true`,
    )
  }

  searchProducts(keyword: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${environment.host}/products?name_like=${keyword}`,
    )
  }

  getAvailableProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${environment.host}/products?available=true`,
    )
  }
  selectProduct(p: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${environment.host}/products/${p.id}`,
      { ...p, selected: !p.selected },
    )
  }
  deleteProduct(p: Product): Observable<void> {
    return this.httpClient.delete<void>(`${environment.host}/products/${p.id}`)
  }
}
