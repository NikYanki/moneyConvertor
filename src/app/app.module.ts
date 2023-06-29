import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {LayoutComponent} from './layout/layout/layout.component';
import {
  AppComponent,
  ConvertorFromUAHComponent,
  ConvertorInUahComponent,
  ExchangeRateComponent,
  ExchangeRatesComponent,
  HeaderComponent
} from "./components";

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    ExchangeRateComponent,
    HeaderComponent,
    LayoutComponent,
    ConvertorInUahComponent,
    ConvertorFromUAHComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
