import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ProductsComponent } from './components/products/products.component'
import { ProductAddComponent } from './components/products/product-add/product-add.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
