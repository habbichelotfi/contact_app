import { Component, OnInit } from '@angular/core';
import {Contact} from '../data/contact';
import {DataService} from '../services/data.service';
import {ActivatedRoute,ParamMap,Router} from '@angular/router';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.scss'],
})
export class DetailsContactComponent implements OnInit {
  contact:Contact|undefined=undefined;
  InputColor='black';
  urlImage:string|undefined=undefined;
  constructor(private dataService: DataService,private route:ActivatedRoute,private router:Router) {}

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
  
onInputChange(text: string){
  if (text.length<14){
   this.InputColor='red';
  }else{
   this.InputColor='black'
  }
}

goBack(){
  this.router.dispose();
  // this.router.navigate(['']);

}
  ngOnInit() {

    const contactName=this.route.snapshot.paramMap.get('contactName');
    if(contactName!=null){
      this.contact=this.dataService.getContactFromName(contactName);
    }
  }

}
