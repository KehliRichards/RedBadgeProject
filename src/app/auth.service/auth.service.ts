import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';
// import { JwtHelperService } from '@auth0/angular-jwt';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupUrl = "http://localhost:3000/user/signup"
  private signinUrl = "http://localhost:3000/user/signin"

  constructor(/*public jwtHelper: JwtHelperService,*/ private http: HttpClient) { }


  signupUser(user) {
    console.log(user);
    return this.http.post<any>(this.signupUrl, user, httpOptions)
  }

  signinUser(user) {
    console.log(localStorage);
    return this.http.post<any>(this.signinUrl, user, httpOptions)
  }

  loggedIn() {
    if(localStorage.length !== 0) {
      return true;
    } else {
      return false;
    }
    // console.log(localStorage);
    // return active;
  }


}
