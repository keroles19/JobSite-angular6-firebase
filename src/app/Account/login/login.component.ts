import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginInfo = {
    Email :'',
    Password :''
  };
  
  dataInfo:any;

  constructor(private fir:AngularFireAuth,private service:UsersService,private router:Router , private flashMessage:FlashMessagesService) { 
  }

  ngOnInit() {
  }
  Login()
  {
    $('#login').attr('disabled','disabled');
    this.fir.auth.signInWithEmailAndPassword(this.loginInfo.Email,this.loginInfo.Password).then(
      user=>{
        this.service.getUserById(user.user.uid).subscribe(data=>{
              this.dataInfo = data;  
              localStorage.setItem('AccountType',this.dataInfo.AccountType);
              location.reload(); 
         })
      }
    ).catch(error=>{
      $('#login').removeAttr('disabled');
     this.flashMessage.show(error , {timeout:3000} );
    })
  }

}
