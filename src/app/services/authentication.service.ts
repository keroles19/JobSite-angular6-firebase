import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  private type: string;

  constructor(private router: Router ) {

    this.type = localStorage.getItem('AccountType');
  }

  canActivate():boolean {
    // switch (this.type) {
    //   case "Seeker":
    //     this.router.navigate(['/Seeker/Jobs']);
    //     return false;
    //   case "Employer":
    //     this.router.navigate(['/Employer']);
    //     return false;
    //   default:
    //     return true;
    // }

    if(this.type)
    {
      this.router.navigate(['/'+this.type]);
      return false;
    }
    else{
      return true;
      
    }
    
  }



}
