import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

import { ProductService } from './shared/service/shopping.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopItemComponent } from './shop-cart/shop-item/shop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopCartComponent,
    
    ShopItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
