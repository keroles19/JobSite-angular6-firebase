import { Component, OnInit } from '@angular/core';
import {seeker} from '../seeker.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from 'src/app/services/users.service';
import { country } from 'src/app/Country_Fields';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-seeker-register',
  templateUrl: './seeker-register.component.html',
  styleUrls: ['./seeker-register.component.css']
})
export class SeekerRegisterComponent implements OnInit {
  country: object[];

   Seeker:seeker={ 
   userEmail:'',
   AccountType:'Seeker',
   password:'',
   Country:'',
   salary:'',
   Bio:'',
   userName:'',
   imageProfile:'default_male.png'
  }


  constructor(private fire:AngularFireAuth , private service:UsersService,private flashMessage:FlashMessagesService) {
   
   }

  ngOnInit() {
    this.country = country;
  }


  Register({value , valid}:{value:seeker ,valid:boolean })
  {
     if(!valid)
     {
        window.scrollTo(0,0);
       this.flashMessage.show('please enter correct values', {  timeout: '3000' });

     }
     else{
      $('#save').attr('disabled','disabled');
       this.service.AddUser(this.Seeker);
     }
  }
}
