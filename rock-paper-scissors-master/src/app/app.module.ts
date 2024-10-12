import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ModalRulesComponent } from './footer/modal-rules/modal-rules.component';
import { MaterialModule } from './material/material.module';
import { CardIconComponent } from './main/card-icon/card-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultDisplayComponent } from './main/result-display/result-display.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ModalRulesComponent,
    CardIconComponent,
    ResultDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
