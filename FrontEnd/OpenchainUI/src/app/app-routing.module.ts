import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes =
[
  { path: "", pathMatch: "full", component: ProductComponent },
  { path: "products", component: ProductComponent },
  { path: "products/category/:categoryId", component: ProductComponent },
  { path: "products/add", component: ProductAddComponent,canActivate:[LoginGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
