import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase,AngularFireList,AngularFireObject} from'@angular/fire/database';
import { JobInfo } from '../Employers/jobInfo.interface';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'

})
       // test    

export class OperationsService {

 // for register 
 jobs  : AngularFireList<any>;
 //oneJob :AngularFireObject<any>;

 jobDetails: AngularFireList<any>;


  constructor(private router:Router,public db:AngularFireDatabase , private flashMessage:FlashMessagesService ) { 
    
    this.jobs = db.list('/jobs');

  }


    // get jobs
   getJobs()
   {
     return this.jobs as AngularFireList<any>;
   }


  //  getSeekerApply()
  //  {
  //    return this.db.list('/jobs/')
  //  }

   getJobDetails(id) {

    return this.db.object('/jobs/'+id).valueChanges();
  }

      // add job  (employer)
  addJobd(value:JobInfo){
   
    try{
    this.jobs.push( value).then(()=>{
       
      this.flashMessage.show('Job added successfully', {  timeout: '3000' });
      setTimeout(() => {
        this.router.navigate(['/Employer']);
      }, 3050);
    })
  }
    catch(error)
    { 
      this.flashMessage.show('Error '+ error.message, {  timeout: '3000' });
      $('#Add').removeAttr('disabled');
    } 
    
  }



  editeJob($key,Info)
  {
    this.jobs.update($key,{
    jobName : Info.jobName,
    employeeR:Info.employeeR,
    catig:Info.catig,
    jobDetails:Info.jobDetails
    }).then(()=>{
      this.flashMessage.show('Job Edited successfully', {  timeout: '3000' });
    }).catch(error=>{
      this.flashMessage.show('Error '+ error.message, {  timeout: '3000' });
      $('#save').removeAttr('disabled');
    })
  }


  deleteJob($key)
  {
     this.jobs.remove($key).then(()=>{
      this.flashMessage.show('remove successfully', {  timeout: '3000' });
    }).catch(error=>{
      this.flashMessage.show('Error '+ error.message, {  timeout: '3000' });
    })
  }


  applyJob(jobKey , userId , seekerName)
  {
 

    let value = {
      seekerName : seekerName
    };

    this.db.database.ref().child(`jobs/${jobKey}/seeker/${userId}/`).set(value)
   .then(()=>{
      this.flashMessage.show('Done you apllay for this jobs', {  timeout: '3000' });
    }).catch((error)=>{
      this.flashMessage.show('some errors (:  try again ', {  timeout: '3000' });
    })
    window.scroll(0,0);
  }



applyStatus(jobKey , uId)
{
  return this.db.object(`jobs/${jobKey}/seeker/${uId}/`).valueChanges();

}




  


  /*
  
  
  .then(()=>{
      this.db.database.ref().child(`/users/${userId}/jobs/${jobKey}`).set({
        date:new Date
      })
      this.flashMessage.show('successfull aplly for job', {  timeout: '3000' });
    })
  
  
  */







// move item in database to an  array
// display()
// {
// this.items = db.list('skills');
// this.items.snapshotChanges().subscribe(actions =>{
//   actions.forEach(action=>{
//    let y = action.payload.toJSON()
//    y['$key'] = action.key;
//    this.result.push(y as itemlist);
//    })
// })
// }


  //update jobinformation 
  // updateInfo(key, data: JobInfo) {

  //   firebase.database().ref('users/Employers/Jobs/' + key).update(data, error => {
  //     if (error) {
  //   this.flashMessage.show(error.message, { cssClass: 'flash flash-success alert', timeout: '5000' });
  //     }
  //     else {
  //       this.flashMessage.show(error.message, { cssClass: 'flash flash-faild alert', timeout: '5000' });      }
  //   });

  // }












}
