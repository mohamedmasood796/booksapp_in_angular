import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'cart',component:CartComponent},
  {path:'books/:id',component:ProductComponent},
  {path:'page404',component:Page404Component},
  {path:'**',redirectTo:"/page404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
