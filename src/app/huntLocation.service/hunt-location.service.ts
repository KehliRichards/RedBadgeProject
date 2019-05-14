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
  private dbUrl = 'http://localhost:3000/huntlocations';

  constructor(private http: HttpClient) { }

  user: boolean = false;

  getHauntedLocations(): Observable<any> {
    let url = this.dbUrl + '/hauntedlocations'
    return this.http.get<any>(`${this.dbUrl}/hauntedlocations`, httpOptions);
  }

  getGhostHunts(): Observable<any> {

    let url = this.dbUrl + '/ghosthunts'
    return this.http.get<any>(`${this.dbUrl}/ghosthunts`, httpOptions);
  }

  createPost(body): Observable<any> {
    const posting = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    let url = this.dbUrl + '/create'
    return this.http.post<any>(`${this.dbUrl}/create`, body, posting);
  }

  deletePost(): Observable<any> {
    let url = this.dbUrl + '/hauntedlocations'
    return this.http.delete<any>(`${this.dbUrl}/delete/:id`, httpOptions);
  }
}
