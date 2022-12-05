import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import {ContactItemComponent} from '../contact-item/contact-item.component';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,ContactItemComponent
]
})
export class HomePageModule {}
