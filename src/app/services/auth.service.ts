import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth){}


// login(email: string, password: string): Observable<boolean>{
//   if(email === 'admin@hr.com' && password === 'admin123'){
//     localStorage.setItem('auth', 'true');
//     return of(true);
//   }
//   else{
//     return of(false);
//   }
// }
// isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }


//  logout(){
//     localStorage.removeItem('auth');
//   }
//    isAuthenticated(): boolean {
//     return localStorage.getItem('auth') === 'true';
//   }

login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
