import { Component, OnInit ,Input} from '@angular/core';
import {Contact} from '../data/contact';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact?: Contact;

  constructor(private router:Router) {
   }
goDetails(){
this.router.navigate(['/details',{contactName:this.contact!.name}]);
}
  ngOnInit() {}

}
