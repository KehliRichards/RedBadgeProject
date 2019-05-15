import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class HuntLocationService {
  public id = '';
  private dbUrl = 'http://localhost:3000/huntlocations';

  constructor(private http: HttpClient) { }

  getHauntedLocations(): Observable<any> {
    // let url = this.dbUrl + '/hauntedlocations'
    return this.http.get<any>(`${this.dbUrl}/hauntedlocations`, httpOptions);
  }

  getUsersHauntedLocations(): Observable<any> {
    const userHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    // let url = this.dbUrl + '/usershauntedlocations'
    return this.http.get<any>(`${this.dbUrl}/usershauntedlocations`, userHeaders);
  }

  getUsersGhostHunts(): Observable<any> {
    const userHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    // let url = this.dbUrl + '/usershauntedlocations'
    return this.http.get<any>(`${this.dbUrl}/usersghosthunts`, userHeaders);
  }

  deletePostAdmin(id): Observable<any> {
    const deleteHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    // let url = this.dbUrl + '/usershauntedlocations'
    return this.http.delete<any>(`${this.dbUrl}/admindelete/${id}`, deleteHeaders);
  }

  getGhostHunts(): Observable<any> {
    // let url = this.dbUrl + '/ghosthunts'
    return this.http.get<any>(`${this.dbUrl}/ghosthunts`, httpOptions);
  }

  CreatePost(): Observable<any> {
    // let url = this.dbUrl + '/create'
    return this.http.get<any>(`${this.dbUrl}/create`, httpOptions);
  }
}