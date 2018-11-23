import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { UploadFilesService } from './upload-files.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private root = 'users/';

  // for register 
  usersDb: AngularFireList<any>;
  user: AngularFireObject<any>;
  uid: any;

  constructor(public db: AngularFireDatabase, public fir: AngularFireAuth, public upload: UploadFilesService, private flashMessage: FlashMessagesService, private router: Router) {

    
  }



  // add seeker  ===>  Done

  AddUser(usersDate) {
    let id = null;
    this.fir.auth.createUserWithEmailAndPassword(usersDate.userEmail, usersDate.password).then(() => {
      id = firebase.auth().currentUser.uid;
     // this.usersDb.push(usersDate);
     this.db.database.ref().child(`users/${id}/`).set(usersDate).then(()=>{
      location.reload();
       localStorage.setItem('AccountType',usersDate.AccountType);
      
     });
    }).catch((error) => {
      if (id != null) {
        this.fir.auth.currentUser.delete;
      }
      $('#save').removeAttr('disabled');
      window.scrollTo(0,0);
      this.flashMessage.show(error, {  timeout: '3000' });
    })
  }


  getUserById(id)
  {
    return this.db.object('/users/'+id).valueChanges();
  }


  resetPasssword(uid,newPassword)
  {
   return  this.db.list('users/').update(uid,{
      password:newPassword
    });
  }






























/*


  
  // updateDate(uid , dataValue)
  // {
  //   return this.db.database.ref().child(`users/${uid}/`).set(dataValue);
  // }
  


  // to Register any users (employer)
  Register(groub: string, data) {
    this.creatEmail(data, groub).then(() => {
      localStorage.setItem('accountGroub/userid', groub + '/' + firebase.auth().currentUser.uid);
      // this.router.navigate(['/'+groub]);
      this.router.navigate(['/Employer/EditeProfile']);

    }).catch(error => {
      document.getElementById('save').removeAttribute('disabled');
      alert(error);
    })
  }

  // create email and password
  creatEmail(dataInfo, groub) {
    let id = "null";
    return new Promise((resolve, reject) => {
      this.fir.auth.createUserWithEmailAndPassword(dataInfo.userEmail, dataInfo.password).then(succss => {
        id = firebase.auth().currentUser.uid;
        firebase.database().ref(this.root + groub + '/' + id).set({
          Country: dataInfo.Country,
          Manager: dataInfo.Manager,
          companyName: dataInfo.companyName,
          facbookGroub: dataInfo.facbookGroub,
          logo: '',
          password: dataInfo.password,
          phone: dataInfo.phone,
          userEmail: dataInfo.userEmail,
          webSite: dataInfo.webSite
        })
        resolve();
      }).catch(error => {
        if (id != "null") {
          this.fir.auth.currentUser.delete;
        }
        reject(error);
      })
    });
  }



  // // upload image profile 
  // uploadProfile(file) {
  //   return new Promise((resolve, reject) => {
  //     this.upload.uploadFile(file).then(sucees => {
  //       resolve();
  //     }).catch(error => {
  //       reject(error);
  //     })

  //   })
  // }


  //update user information 
  updateInfo(AccountType: string, dataInfo, uid) {

    firebase.database().ref(this.root + AccountType + '/' + uid).update(
      {
        Country: dataInfo.Country,
        Manager: dataInfo.Manager,
        companyName: dataInfo.companyName,
        facbookGroub: dataInfo.facbookGroub,
        logo: dataInfo.logo,
        password: dataInfo.password,
        phone: dataInfo.phone,
        userEmail: dataInfo.userEmail,
        webSite: dataInfo.webSite
      }
      , error => {
        if (error) {
          alert('updated failure :(');
        }
        else {
          alert('updated Successfuly (:');
        }
      });

  }

  // add job (employes)
  AddJobs(JobInfo, uid) {


    firebase.database().ref('Jobs/').set({
      employeeR: JobInfo.employeeR,
      catig: JobInfo.catig,
      jobDetails: JobInfo.jobDetails,
      jobName: JobInfo.jobName,
      userId: uid
    }).then(() => {
      alert("added sucess");
      // this.flashMessage.show('successfully added ', { cssClass: 'alert-success', timeout: 2000 });
    }).catch(error => {
      // this.flashMessage.show('Failure added '+error.Message, { cssClass: 'alert-danger', timeout: 2000 });
      alert(error.Message);
    })
    // this.flashMessage.show('Failure added '+error.Message, { cssClass: 'alert-danger', timeout: 2000 });



  }



*/

}



