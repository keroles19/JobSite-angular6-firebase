import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { OperationsService } from 'src/app/services/operations.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {
  jobs = [];
  status: boolean = false;
  evilResponseProps;
  id:string;
  constructor(private fire: AngularFireAuth,  private service: OperationsService, public router: Router) {
    

   
   }

  ngOnInit() {
 setTimeout(()=>{


  this.id = this.fire.auth.currentUser.uid
  this.service.getJobs().snapshotChanges().subscribe(actions => {
    actions.forEach(action => {
      let y = action.payload.toJSON()
      y['$key'] = action.key;
      if (y['seeker']) {
        this.evilResponseProps = Object.keys(y['seeker']);
        for(let item of this.evilResponseProps)
        {
          if(item ===this.id)
          {
          this.jobs.push(y);
          }
        }
      }
    }
    )
    this.status = true;
    
    // this.evilResponseProps = Object.keys(this.seeker);
  
  



})


  
 },8000)
    


}




  







    }
