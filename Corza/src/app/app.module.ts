import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSapcePipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';


// export const firebaseConfig = {
//   apiKey: "AIzaSyAYXofL9J3JIlcTpVwRQAHpAMV8f2ICm2k",
//   authDomain: "corza-b04c3.firebaseapp.com",
//   databaseURL: "https://corza-b04c3.firebaseio.com",
//   projectId: "corza-b04c3",
//   storageBucket: "corza-b04c3.appspot.com",
//   messagingSenderId: "151502071408"
// };

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSapcePipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: '', component: ProductDetailComponent },
      { path: '**', component: ProductDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
