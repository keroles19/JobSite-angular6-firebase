import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { OperationsService } from 'src/app/services/operations.service';
import { Router } from '@angular/router';
// import { JobInfo } from '../jobInfo.interface';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  jobs = [];
  status: boolean = false;
  seeker = {};
  evilResponseProps;

  constructor(private fire: AngularFireAuth,  private service: OperationsService, public router: Router) {



  }

  ngOnInit() {


    this.service.getJobs().snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let y = action.payload.toJSON()
        y['$key'] = action.key;
        if (y['userId'] == this.fire.auth.currentUser.uid && y['seeker']) {
          this.jobs.push(y);
          this.seeker = {...y['seeker']}
        }
      }
      )
      this.status = true;
      this.evilResponseProps = Object.keys(this.seeker);
    
    
      
      // for(let i of evilResponseProps)
      // {
      //   console.log(i);
      // } 



    }



    )



 
}


}




