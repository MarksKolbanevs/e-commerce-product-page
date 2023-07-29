import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartService } from 'src/services/CartService';
import { ProductService } from 'src/services/ProductService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
