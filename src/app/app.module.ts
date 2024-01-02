import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { FormsModule } from '@angular/forms';
import { ChildOninitComponent } from './child-oninit/child-oninit.component';
import { ChildDocheckComponent } from './child-docheck/child-docheck.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducer';
import { FormComponent } from './form/form.component';
import { RxjsLibraryComponent } from './rxjs-library/rxjs-library.component';
import {HttpClientModule} from '@angular/common/http';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    ChildOninitComponent,
    ChildDocheckComponent,
    FormComponent,
    RxjsLibraryComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({user:userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
