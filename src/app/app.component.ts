import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Hr_Management_Dashboard';

  constructor(private router: Router){}

  ngoninit() {
    if(this.router.url !== '/login'){
      this.router.navigate(['/login']);
    }
  }
  navigateToLogin(){
    return this.router.url === '/login'
  }
}
