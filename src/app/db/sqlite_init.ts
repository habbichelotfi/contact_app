import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject,SQLiteDatabaseConfig } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonItemSliding } from '@ionic/angular';
import { Contact } from '../data/contact';
@Injectable({
    providedIn: 'root'
  })
export class SqliteImplementation{
    db:SQLiteObject|undefined=undefined;
//     constructor(private sqlite: SQLite) { 
//         this.sqlite.create(
//             {
//                 name:'data.db',
//                 location:'default'
//             }
//         ).then((db:SQLiteObject)=>{
//             this.db=db;
//             db.executeSql('create table contact(id INTEGER PRIMARY KEY,name VARCHAR(255),phone VARCHAR(255),contact_picture VARCHAR(255))').then(
//                 ()=>{
//                     console.log('SQL REQUEST EXECUTED')
//                 }
//             ).catch(e=>console.log(e))
//         })
//     }

    
//     addContact(name:string,phone:string,contact_picture:string){
//         this.db?.executeSql("INSERT INTO contact(name,phone,contact_pictures) VALUES ("+name+","+phone+","+contact_picture+")");
//     }

//     getContacts(){
//         this.db?.executeSql("Selecet * from contact",[]).then(res=>{
// let items:Contact[]=[];
// if (res.rows.length>0){

//     for (var i=0;i<res.rows.length;i++){

//     items.push({
//         id:res.rows.item(i).id,
//         name:res.rows.item(i).name,
//         phone:res.rows.item(i).phone,
//         contact_picture:res.rows.item(i).contact_picture
//     })
//     }
// }
// return items;
//         })
        
//     }
//     updateContact(name:string,phone:string,url:string){
//         this.db?.executeSql('UPDATE contact SET contact.name='+name+',contact.phone='+phone+'contact.url='+url).then()
//     }

}

