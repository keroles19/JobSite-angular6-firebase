import { Component, OnInit  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {JobInfo} from '../../Employers/jobInfo.interface';

@Component({
  selector: 'app-br-fields',
  templateUrl: './br-fields.component.html',
  styleUrls: ['./br-fields.component.css']
})
export class BrFieldsComponent implements OnInit {

  

  jobs = [];

  dataJob = {
    jobName: '',
    employeeR: '',
    catig: '',
    jobDetails: '',
  }
  status = false;
  fName:string;
  constructor( private router:ActivatedRoute , private service:OperationsService , private fire:AngularFireAuth ) {

    this.fName = this.router.snapshot.params['id'];

  }

  ngOnInit() {
   this.getResult();
  }

  getResult()
{

  this.service.getJobs().snapshotChanges().subscribe(actions => {
    actions.forEach(action => {
      let y = action.payload.toJSON()
      y['$key'] = action.key;
      if(y['catig'] == this.fName)
      {
      this.jobs.push(y as JobInfo);
      } 
    })
    this.status = true;

  })
}
}


