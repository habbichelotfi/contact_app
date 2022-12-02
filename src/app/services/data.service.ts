import { Injectable } from '@angular/core';


import {Contact} from '../data/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public contacts: Contact[] = [];

  
  //   {
  //     name: 'Matt Chorsey',
  //     phone: "05 43 13 21 23",
  //     contact_picture:"../../assets/default-icon.jpg"

  //   },
  //   {
  //     name: 'Lauren Ruthford',
  //     phone: "05 43 13 21 23",
  //     contact_picture:"../../assets/default-icon.jpg"

  //   },
  //   {
  //     name: 'Jordan Firth',
  //     phone: "05 43 13 21 23",
  //     contact_picture:"../../assets/default-icon.jpg"

  //   },
  //   {
  //     name: 'Bill Thomas',
  //     phone: "05 43 13 21 23",
  //     contact_picture:"../../assets/default-icon.jpg"

  //   },

  // ];

  constructor() { 

    
  }

  public getContacts(): ReadonlyArray<Contact> {
    return this.contacts;
  }
  public getContactFromName(contactName:string):Contact|undefined{
    return this.contacts.find(contact=>contact.name===contactName) as Contact;
  }

  // public getMessageById(id: number): Message {
  //   return this.messages[id];
  // }
}
