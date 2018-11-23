import { Component, OnInit } from '@angular/core';
import { country } from 'src/app/Country_Fields';
import { UsersService } from 'src/app/services/users.service';
import { UploadFilesService } from 'src/app/services/upload-files.service';
import {Employers}  from '../Employer.interface';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-em-register',
  templateUrl: './em-register.component.html',
  styleUrls: ['./em-register.component.css']
})
export class EmRegisterComponent implements OnInit {

employer:Employers={
  companyName:'',
  Country:'',
  Manager:'',
  facbookGroub:'',
  password:'',
  phone:'',
  userEmail:'',
  webSite:'',
  AccountType:'Employer',
  imageProfile:'default_male.png'
};

  country: object[];
  //dataInfo: {[k: string]: any} = {};
  constructor(private users:UsersService,public upload:UploadFilesService,private flashMessage:FlashMessagesService) {
   }

  ngOnInit() {
    this.country = country;
  }

  Register({value , valid}:{value:Employers ,valid:boolean })
  {
     if(!valid)
     {
        window.scrollTo(0,0);
       this.flashMessage.show('please enter correct values', {  timeout: '3000' });
       
     }
     else{
      $('#save').attr('disabled','disabled');
      this.users.AddUser(this.employer);
    }
  }
  }




