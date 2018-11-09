import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList} from '@angular/fire/database';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';



@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

  items: AngularFireList<any>;
  jobs = [];

  dataJob = {
    jobName: '',
    employeeR: '',
    catig: '',
    jobDetails: '',
  };

  constructor(private service:OperationsService,public router:Router) {
   
  
   }

  ngOnInit() {


      //show all jobs
      this.service.getJobs().snapshotChanges().subscribe(actions => {
        actions.forEach(action => {
          let y = action.payload.toJSON()
          y['$key'] = action.key;
          this.jobs.push(y as itemlist);
        })
      })
  }
















}
export class itemlist {
  $key: string;
  jobName: string;
  employeeR: string;
  catig: string;
  jobDetails: string;
  userId: any;
}