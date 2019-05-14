import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoriesService {
  private dbUrl = 'http://localhost:3000/psnllgnd';

  constructor(private http: HttpClient) { }

  // getHauntedLocations(): Observable<any> {
  //   // let url = this.dbUrl + '/hauntedlocations'
  //   return this.http.get<any>(`${this.dbUrl}/hauntedlocations`, httpOptions);
  // }

  getUsersPersonalStories(): Observable<any> {
    const userHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    // let url = this.dbUrl + '/usershauntedlocations'
    return this.http.get<any>(`${this.dbUrl}/userspersonalstories`, userHeaders);
  }

  getUsersUrbanLegends(): Observable<any> {
    const userHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    // let url = this.dbUrl + '/usershauntedlocations'
    return this.http.get<any>(`${this.dbUrl}/usersurbanlegends`, userHeaders);
  }

}