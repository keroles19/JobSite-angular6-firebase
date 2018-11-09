import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  userId?:string;
  details={};
  status:boolean=false;
  // notExists:boolean=true;
  length;
  constructor(private userService:UsersService, private router:Router ,private route:ActivatedRoute , private serveice:OperationsService) {

    this.userId =this.route.snapshot.params['id'];
   }

  ngOnInit() {
    
    this.userService.getUserById(this.userId).subscribe(arg =>{this.details = {...arg};
     this.length = Object.keys(this.details).length;
     if(this.length < 0)
     {
      this.router.navigate(['/NotFound']);
     }
     })
}  
}
