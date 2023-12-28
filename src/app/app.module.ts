import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './products/convert-to-spaces.pipes';
import { Component, OnInit } from '@angular/core';
import { StarComponent } from './products/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component'
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './products/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe ,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'products' , component : ProductListComponent},
      {
       
        path : 'products/:id' , 
        canActivate : [ProductDetailGuard] ,
        component : ProductDetailComponent
      },
      { path : 'welcome' , component : WelcomeComponent},
      { path : '' , redirectTo :'welcome', pathMatch :'full'},
      { path : '**' , redirectTo : 'welcome', pathMatch : 'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function ngOnInit(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

 