import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductGuardGuard } from './product/product-guard.guard';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',canActivate:[ProductGuardGuard],component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
