import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { WindowManagerService } from './window/window-manager.service';
import { AppRoutingModule } from './app-routing.module';
import { Window2Component } from './window2/window2.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    Window2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WindowManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
