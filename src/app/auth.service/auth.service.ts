import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    // 'Authorization': localStorage.getItem('token')
  })
}

// const httpOptionsV = {
//   headers: new HttpHeaders({
//     'Content-Type' : 'application/json',
//     'Authorization': localStorage.getItem('token')
//   })
// }


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupUrl = "http://localhost:3000/user/signup"
  private signinUrl = "http://localhost:3000/user/signin"
  private userUrl = "http://localhost:3000/user/currentuser"

  constructor(private http: HttpClient) { }


  signupUser(user) {
    console.log(user);
    return this.http.post<any>(this.signupUrl, user, httpOptions)
  }

  signinUser(user) {
    console.log(localStorage);
    return this.http.post<any>(this.signinUrl, user, httpOptions)
  }

  loggedIn() {
    if (localStorage.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    const users = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get<any>(this.userUrl, users)
  }

}
