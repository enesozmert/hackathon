import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { KnobModule } from 'primeng/knob';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NaviComponent } from './component/navi/navi.component';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { CategoryComponent } from './component/category/category.component';
import { ProductComponent } from './component/product/product.component';
import { CardComponent } from './component/card/card.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter.pipe';
import { CameraReadingComponent } from './component/fake-chain/camera-reading/camera-reading.component';
import { BlockChainTokenComponent } from './component/fake-chain/block-chain-token/block-chain-token.component';
import { BlockChainConfirmationComponent } from './component/fake-chain/block-chain-confirmation/block-chain-confirmation.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NaviComponent,
    CartSummaryComponent,
    CategoryComponent,
    ProductComponent,
    CardComponent,
    VatAddedPipe,
    FilterPipePipe,
    CameraReadingComponent,
    BlockChainTokenComponent,
    BlockChainConfirmationComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    KnobModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
