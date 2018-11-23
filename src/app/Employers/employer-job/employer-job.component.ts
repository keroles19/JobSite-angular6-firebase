import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { OperationsService } from 'src/app/services/operations.service';
import { fields } from '../../Country_Fields';
import {JobInfo} from '../jobInfo.interface';

@Component({
  selector: 'app-employer-job',
  templateUrl: './employer-job.component.html',
  styleUrls: ['./employer-job.component.css']
})
export class EmployerJobComponent implements OnInit {

  jobs = [];

  dataJob:JobInfo = {
    jobName: '',
    employeeR: '',
    catig: '',
    jobDetails: '',
  }
  
 
  status:boolean=false;
  fileds = fields;
  modal_key: string;    // variable to solve problem value of key when Edite

  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;  //close Modal

  constructor(private fire: AngularFireAuth, private db: AngularFireDatabase, private service: OperationsService, public router: Router) {

   
  }
  ngOnInit() {
    this.service.getJobs().snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let y = action.payload.toJSON()
        y['$key'] = action.key;
        if(y['userId']== this.fire.auth.currentUser.uid )
        {
        this.jobs.push(y as JobInfo);
        }
      })
      this.status =true;
    })
  }

  // change value in modal 
  TypeEdite($key) {
    for (let val of this.jobs) {
      if (val['$key'] == $key) {
        this.dataJob = {
          jobName: val['jobName'],
          employeeR: val['employeeR'],
          catig: val['catig'],
          jobDetails: val['jobDetails'],
        };
      }
    }
    this.modal_key = $key;
  }


  // Edite job

  SaveChange(frm) {
    if (this.modal_key != null && (!frm.invalid && frm.touched)) {
      this.service.editeJob(this.modal_key, this.dataJob);
      this.jobs = [];
      this.closeAddExpenseModal.nativeElement.click();
    }
    else{
      alert('please try again must be a valid data');
    }
  }

  delete($key) {
    this.service.deleteJob($key);
    this.jobs = [];
  }





}

