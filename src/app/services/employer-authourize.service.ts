import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployerAuthourizeService implements CanActivate  {
  private type: string;
  constructor(private router: Router) {

  this.type = localStorage.getItem('AccountType');

   }


canActivate():boolean {

  if(this.type === "Employer")
  {
    return true;
  }
  else{
   
    this.router.navigate(['/login']);
    return false;
  }
   
  


}
}






