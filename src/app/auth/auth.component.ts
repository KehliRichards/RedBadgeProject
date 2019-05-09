import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  signupForm: FormGroup;
  loginForm: FormGroup;

  // registerUserData = {}
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      location: ['']
    })
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  registerUser() {
    this.auth.signupUser(this.signupForm.value)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.sessionToken);
        this.router.navigate(['/home'])
      },
      err => console.log(err)
    )
  }

  loginUser() {
    this.auth.signinUser(this.loginForm.value)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.sessionToken);
        this.router.navigate(['/home'])
      },
      err => console.log(err)
    )
  }

}
