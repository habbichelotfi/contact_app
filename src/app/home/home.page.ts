import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService } from '../services/data.service';
import {Contact} from '../data/contact';
// import { SqliteImplementation } from '../db/sqlite_init';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts!:ReadonlyArray<Contact>;
  copyOfContacts!:ReadonlyArray<Contact>;
  search:string|undefined=undefined;
  Data: any[] = []
  colors=["primary","secondary","tertiary","success"];
  constructor(private data: DataService,
    // private db:SqliteImplementation
    ) { 

    }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
  ngOnInit():void{

  //  console.log( this.db.getContacts());
    this.contacts=this.data.getContacts();
    this.copyOfContacts=[...this.contacts];
  }

  searchContact(){
   this.contacts=this.copyOfContacts.filter((contact)=>{
    console.log(contact.name,this.search);
      return contact.name.toLowerCase().includes(this.search!.toLowerCase());
    });

    console.log(this.contacts);
  }
  // getContacts(): Contact[] {
  //   return this.data.getContacts();
  // }

}
