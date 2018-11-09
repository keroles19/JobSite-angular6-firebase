import {Routes} from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { HomeComponent } from './home/home.component';
import { AllJobsComponent } from './Employees/all-jobs/all-jobs.component';
import { BrFieldsComponent } from './Employees/br-fields/br-fields.component';
import { MyJobsComponent } from './Employees/my-jobs/my-jobs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddJobsComponent } from './Employers/add-jobs/add-jobs.component';
import { EmployeesComponent } from './Employers/employees/employees.component';
import { EmployerJobComponent } from './Employers/employer-job/employer-job.component';
import { EmRegisterComponent } from './Employers/em-register/em-register.component';
import { EditeProfileEmComponent } from './Employers/edite-profile-em/edite-profile-em.component';
import { SeekerRegisterComponent } from './Employees/seeker-register/seeker-register.component';
import { JobDetailsComponent } from './Employees/job-details/job-details.component';
import { EditeProfileseekComponent } from './Employees/edite-profileseek/edite-profileseek.component';
import { AuthenticationService } from './services/authentication.service';
import { SeekerAuthourizeService } from './services/seeker-authourize.service';
import { EmployerAuthourizeService } from './services/employer-authourize.service';
import { UsersDetailsComponent } from './Employers/users-details/users-details.component';


export const routes: Routes = [
    {path: "", component: HomeComponent,canActivate:[AuthenticationService]},
    { path: 'Home',component: HomeComponent,canActivate:[AuthenticationService]},
    { path: 'login', component: LoginComponent,canActivate:[AuthenticationService] },
    { path: 'Seeker/register', component:SeekerRegisterComponent,canActivate:[AuthenticationService]},
    { path: 'Employer/register', component: EmRegisterComponent,canActivate:[AuthenticationService] },
    
    {path:'Seeker' , 
    canActivate:[SeekerAuthourizeService],
    children:[
    { path: '', component: AllJobsComponent },
    { path: 'Jobs', component: MyJobsComponent}, 
    { path: 'EditeProfile', component: EditeProfileseekComponent }, 
    { path: 'jobFields/:id', component: BrFieldsComponent },
    { path: 'jobDetails', component:JobDetailsComponent}, 
]}
,
   {path:'Employer' , 
   canActivate:[EmployerAuthourizeService],
    children:[
    { path: '', component: EmployerJobComponent },
    { path: 'Add-Job', component: AddJobsComponent},
    { path: 'employees', component: EmployeesComponent},
    { path: 'EditeProfile', component: EditeProfileEmComponent},
    { path: 'UserDetails/:id', component: UsersDetailsComponent},
]
}

,{ path: '**', component:NotfoundComponent}

   /*          // Employees 
    { path: 'seeker/register', component:SeekerRegisterComponent,canActivate:[] },
    { path: 'seeker/Jobs', component: AllJobsComponent },//canActivate:[AuthourizeService]
    { path: 'seeker/EditeProfile', component: EditeProfileseekComponent }, //canActivate:[AuthourizeService]
    { path: 'Seeker', component: MyJobsComponent}, //canActivate:[AuthourizeService]
    { path: 'seeker/jobFields/:id', component: BrFieldsComponent },//canActivate:[AuthourizeService]
    { path: 'seeker/jobDetails', component:JobDetailsComponent}, //canActivate:[AuthourizeService] 


    */
            //Employers
 
];



