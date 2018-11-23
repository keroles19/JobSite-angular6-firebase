import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { country, fields } from '../Country_Fields';
import { UploadFilesService } from '../services/upload-files.service';
import { UsersService } from '../services/users.service';

// import { Observable } from 'rxjs';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // user:Observable<firebase.User>;
  private isLogined = null;
  // private Email:string;

  country: object[];
  fields: object[];
  dataInfo:any;


  items: AngularFireList<any>;
  imageUrl = null;
  constructor(private fire: AngularFireAuth, private router: Router,private service:UsersService,private fileService:UploadFilesService) {
    let status = localStorage.getItem('AccountType');
    if (status) {
      this.isLogined = status;
    }
    else {
      this.isLogined = null;
    }

    // firebase.auth().onAuthStateChanged(function(user) {
    // if (user) {
    //    this.isLogined = true;
    //    console.log(this.isLogined);
    // } else {
    //   this.isLogined = false;
    //   this.router.navigate(['/Home']);
    // }
    // });
  }

  ngOnInit() {

    this.country = country;
    this.fields = fields;


if(this.isLogined!=null)
{
    setTimeout(()=>{
      let uId = this.fire.auth.currentUser.uid;
      
      // this.service.getUserById(uId).then((args)=>{
      //    image = args.userName
      // })

      this.service.getUserById(uId).subscribe(user=>{
          this.dataInfo = user;
        this.fileService.getImageProfile(this.dataInfo.imageProfile).then((url)=>{
          this.imageUrl = url;
      })
      })

       
      // .catch((error)=>{
      //   // $('#image').attr('src','https://firebasestorage.googleapis.com/v0/b/final-57b26.appspot.com/o/userProfiles%2Fbusy-glassware-job-266141.jpg?alt=media&token=a2b9e6e0-bae0-49be-bf33-45fff719ba55');
      //  this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/final-57b26.appspot.com/o/userProfiles%2Fbusy-glassware-job-266141.jpg?alt=media&token=a2b9e6e0-bae0-49be-bf33-45fff719ba55';
      // });
     
    },9000)

    // display info for user by uid

  }
}

  Logout() {
    this.fire.auth.signOut().then(() => {
      localStorage.removeItem('AccountType')
      location.reload();
      this.router.navigate(['/Home']);

    });
    // localStorage.setItem('isLogined','false');


  }


}








