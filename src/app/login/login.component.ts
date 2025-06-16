import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: string = '';
  // password: string = '';

  loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required]]
});

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => alert(err.message));
  }

register() {
  this.authService.register(this.loginForm.value.email, this.loginForm.value.password)
    .then((userCredential) => {
      alert('Registered successfully');
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
      console.error('Registration error:', error);
    });
}

}
