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

  // signupForm: FormGroup;
  loginForm: FormGroup;
  login: boolean = false;
  head: string = 'Login';
  account: string = 'Need an account?'

  // registerUserData = {}
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,) { }

  ngOnInit() {
    // this.head = this.login === false ? 'Sign Up' : 'Login';
    // this.signupForm = this.fb.group({
    //   name: [''],
    //   email: [''],
    //   password: [''],
    //   location: ['']
    // })
    if(this.login === true) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  } else {
    this.loginForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      location: ['']
    })
  }
  }

  // registerUser() {
  //   this.auth.signupUser(this.signupForm.value)
  //   .subscribe(
  //     res => {
  //       console.log(res);
  //       localStorage.setItem('token', res.sessionToken);
  //       this.router.navigate(['/home'])
  //     },
  //     err => console.log(err)
  //   )
  // }

  loginUser() {
    if(this.login === false) {
    this.auth.signinUser(this.loginForm.value)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.sessionToken);
        this.router.navigate(['/home'])
      },
      err => console.log(err)
    )
    }else{
      this.auth.signupUser(this.loginForm.value)
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

  toggle() {
    if(this.login === false) {
      this.login = true;
      this.head = 'Sign Up'
      this.account = 'Already have an account?'
    } else {
      this.login = false;
      this.head = 'Login'
      this.account = 'Need an account?'
    }
  }

}
