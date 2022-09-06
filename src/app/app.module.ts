import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from "./app.material-module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './nodes/home/home.component';
import { DashifyPipe } from './shared/pipes/dashify.pipe';
import { ModalComponent } from './shared/components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashifyPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
