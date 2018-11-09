import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeekerAuthourizeService {

  private type: string;
  constructor(private router: Router) {

  this.type = localStorage.getItem('AccountType');

   }


canActivate():boolean {

  if(this.type === "Seeker")
  {
    return true;
  }
  else{
   
    this.router.navigate(['/login']);
    return false;
  }
   
}
}
