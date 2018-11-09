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
   
   
  constructor(private fir:AngularFireAuth,private service:UsersService,private router:Router , private flashMessage:FlashMessagesService) { 
  }

  ngOnInit() {
  }
  Login()
  {
    $('#login').attr('disabled','disabled');
    this.fir.auth.signInWithEmailAndPassword(this.loginInfo.Email,this.loginInfo.Password).then(
      user=>{
        // user.user.uid
        // localStorage.setItem('isLogined','true');
        // location.reload(); 
        // this.router.navigate(['/jobs/we'])
        this.service.getUserById(user.user.uid).subscribe(data=>{
          // if(data.AccountType === "Seeker")
          // {
          //   console.log('ddd');
           
          // }
          // else
          // {
          //   console.log('ss');
          //   //this.router.navigate(['/Employer'])
          // } 
          localStorage.setItem('AccountType',data.AccountType);
          location.reload();
        //  switch(data.AccountType)
        //  {
        //    case"Seeker": this.router.navigate(['/seeker/Jobs']);  break;
        //    case"Employer":this.router.navigate(['/Employer']);break;
        //    default :this.fir.auth.signOut; 
        //  }
         })
      }
    ).catch(error=>{
      $('#login').removeAttr('disabled');
     this.flashMessage.show(error , {timeout:3000} );
    })
  }

}
