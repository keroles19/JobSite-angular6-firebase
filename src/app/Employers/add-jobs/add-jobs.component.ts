import { Component, OnInit } from '@angular/core';
import { fields } from 'src/app/Country_Fields';
import { UsersService } from 'src/app/services/users.service';
import { JobInfo } from '../../Employers/jobInfo.interface';
import { OperationsService } from 'src/app/services/operations.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {


  // uId?:string;
  fileds: object[];

  job: JobInfo = {
    catig: '',
    employeeR: '',
    jobDetails: '',
    jobName: '',
    userId: '', // ID
  }
  constructor(private service: UsersService, public operations: OperationsService, private fir: AngularFireAuth) {

  }

  ngOnInit() {
    this.fileds = fields;
  }
  onSubmit({valid }: {valid: boolean }) {
    if (!valid) {
      alert('please enter correct values ');
    }
    else {
      $('#Add').attr('disabled','disabled');
      this.job.userId = this.fir.auth.currentUser.uid;
       this.operations.addJobd(this.job);
    }

 
      //  this.uId = firebase.auth().currentUser.uid;
      //  this.op.AddJobs(frm,this.uId);





  }

}


