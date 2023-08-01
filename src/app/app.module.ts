import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { BookApiServiceService } from './service/book-api-service.service';
import { NriCurrencyPipe } from './pipe/nri-currency.pipe';
import { Page404Component } from './components/page404/page404.component';
import { ErrorHandlingInterceptor } from './core/Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent,
    BannerComponent,
    CartComponent,
    ProductComponent,
    NriCurrencyPipe,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
