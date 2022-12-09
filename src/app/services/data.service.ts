import { Injectable } from '@angular/core';


import {Contact} from '../data/contact';
import { StorageHelper } from '../storage/storage_helper';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // public contacts: Contact[] = [];
  private storage: Storage | undefined=undefined;
  public _contacts:Contact[]=[
    {
      id:1,
      name: 'Matt Chorsey',
      phone: "05 43 13 21 23",
      contact_picture:"../../assets/default-icon.jpg"

    },
    {
      id:2,
      name: 'Lauren Ruthford',
      phone: "05 43 13 21 23",
      contact_picture:"../../assets/default-icon.jpg"

    },
    {
      id:3,
      name: 'Jordan Firth',
      phone: "05 43 13 21 23",
      contact_picture:"../../assets/default-icon.jpg"

    },
    {
      id:4,
      name: 'Bill Thomas',
      phone: "05 43 13 21 23",
      contact_picture:"../../assets/default-icon.jpg"

    },

  ];

  constructor() {
  }
  public get contacts():ReadonlyArray<Contact>{
   return this._contacts;
  }

  public getContacts(): ReadonlyArray<Contact> {
    return this._contacts;
  }
  public getContactFromName(contactName:string):Contact|undefined{
    return this._contacts.find(contact=>contact.name===contactName) as Contact;
  }

  // public getMessageById(id: number): Message {
  //   return this.messages[id];
  // }
}
