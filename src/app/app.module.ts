import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { TimmarComponent } from './timmar/timmar.component';
import { YsfComponent } from './ysf/ysf.component';
import { BrandingComponent } from './branding/branding.component';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    TimmarComponent,
    YsfComponent,
    BrandingComponent,
    ShippingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
