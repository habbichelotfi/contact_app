import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService } from '../services/data.service';
import {Contact} from '../data/contact';
import { SqliteImplementation } from '../db/sqlite_init';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts!:ReadonlyArray<Contact>;
  Data: any[] = []
  colors=["primary","secondary","tertiary","success"];
  constructor(private data: DataService,private db:SqliteImplementation) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
  ngOnInit():void{

   console.log( this.db.getContacts());
    this.contacts=this.data.getContacts();
  }

  // getContacts(): Contact[] {
  //   return this.data.getContacts();
  // }

}
