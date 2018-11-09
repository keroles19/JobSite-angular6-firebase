import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { LoginComponent } from './Account/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AllJobsComponent } from './Employees/all-jobs/all-jobs.component';
import { BrFieldsComponent } from './Employees/br-fields/br-fields.component';
import { MyJobsComponent } from './Employees/my-jobs/my-jobs.component';
import { EmployeesComponent } from './Employers/employees/employees.component';
import { EmployerJobComponent } from './Employers/employer-job/employer-job.component';
import { EditeProfileEmComponent } from './Employers/edite-profile-em/edite-profile-em.component';
import { EditeProfileseekComponent } from './Employees/edite-profileseek/edite-profileseek.component';
import { AddJobsComponent } from './Employers/add-jobs/add-jobs.component';
import { SeekerRegisterComponent } from './Employees/seeker-register/seeker-register.component';
import { EmRegisterComponent } from './Employers/em-register/em-register.component';
import { UsersService } from './services/users.service';
import { OperationsService } from './services/operations.service';
import { JobDetailsComponent } from './Employees/job-details/job-details.component';
import { AuthenticationService } from './services/authentication.service';
import { EmployerAuthourizeService } from './services/employer-authourize.service';
import { SeekerAuthourizeService } from './services/seeker-authourize.service';
import { UsersDetailsComponent } from './Employers/users-details/users-details.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    NavBarComponent,
    HomeComponent,
    AllJobsComponent,
    BrFieldsComponent,
    MyJobsComponent,
    EmployeesComponent,
    EmployerJobComponent,
    EditeProfileEmComponent,
    EditeProfileseekComponent,
    AddJobsComponent,
    SeekerRegisterComponent,
    EmRegisterComponent,
    JobDetailsComponent,
    UsersDetailsComponent


   
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    
    
  ],
  providers: [

   UsersService,
   OperationsService,
   AuthenticationService,
   EmployerAuthourizeService,
   SeekerAuthourizeService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
