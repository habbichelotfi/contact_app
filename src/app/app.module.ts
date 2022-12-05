import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ContactItemComponent} from './contact-item/contact-item.component';
import {DetailsContactComponent} from './details-contact/details-contact.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@awesome-cordova-plugins/sqlite';
import { AddContactComponent } from './add-contact/add-contact.component';
@NgModule({
  
  declarations: [AppComponent,DetailsContactComponent,AddContactComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CommonModule,FormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
