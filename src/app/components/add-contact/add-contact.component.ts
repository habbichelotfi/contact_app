import { Component, OnInit } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { Contact } from '../../data/contact';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  InputColor='black';
  contact:Contact|undefined=undefined;

  constructor() { }

  ngOnInit() {}
  takePicture = async () => {
    const image=await Camera.pickImages({presentationStyle:'popover',limit:1});
     // const image=await Camera.getPhoto({
     //   quality: 90,
     //   allowEditing: true,
     //   resultType: CameraResultType.Uri
     // });

   var imageUrl = image.photos[0].webPath;
   this.contact!.contact_picture=imageUrl!;

 };

}
