import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';
import { UsersService } from 'src/app/services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobKey?:string;
  userId?:string;
  details={};
  // notExists:boolean=true;
  length=0;
  dataInfo:any;
  jobstatus:boolean;
  constructor(private userService:UsersService,private fire:AngularFireAuth ,private router:Router ,private route:ActivatedRoute , private serveice:OperationsService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.jobKey = params['jobId'];
      this.userId = params['companyId'];
  });
    this.serveice.getJobDetails(this.jobKey).subscribe(res=>{
     this.userService.getUserById(this.userId).subscribe(user=>{
       this.details = {...res,...user}
      /*  if(this.details.length < 11)
        {
         this.notExists = false;
         console.log(this.details);
        }
      */
     this.applyStaus();
     this.length = Object.keys(this.details).length;
     if(this.length < 11)
     {
      // this.notExists = false;
      this.router.navigate(['/NotFound']);
     }
     })
     
  })  
 

    }
     
     

     applyStaus()
     {
      this.serveice.applyStatus(this.jobKey , this.fire.auth.currentUser.uid).subscribe(x => {
        if (x){
              this.jobstatus = true;
        }else {
          this.jobstatus = false;
        }
    });
    }




    apllyJob()
    {
      var name;
         $('#applay').attr('disabled','disabled');
      this.userService.getUserById(this.fire.auth.currentUser.uid).subscribe((res=>{
        this.dataInfo = res;
        name = this.dataInfo.userName;
        this.serveice.applyJob(this.jobKey,this.fire.auth.currentUser.uid,name);
      }))
     
    }


   
  }
