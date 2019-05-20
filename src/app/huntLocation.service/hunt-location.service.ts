import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIURL } from '../../environments/environment.prod';

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
  private dbUrl = `${APIURL}/huntlocations`;

  constructor(private http: HttpClient) { }

  getAllHL(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    // let url = this.dbUrl + '/hauntedlocations'
    return this.http.get<any>(`${this.dbUrl}/getall`, httpOption);
  }

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
    return this.http.get<any>(`${this.dbUrl}/usersghosthunts`, userHeaders);

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

  deletePost(id): Observable<any> {
    let url = this.dbUrl + '/hauntedlocations'
    return this.http.delete<any>(`${this.dbUrl}/delete/${id}`, httpOptions);
  }

  editPost(body, id): Observable<any> {
    const posting = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    let url = this.dbUrl + '/hauntedlocations'
    return this.http.put<any>(`${this.dbUrl}/update/${id}`, body, posting);
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

}
