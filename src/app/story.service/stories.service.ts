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

export class StoriesService {
  private dbUrl = 'http://localhost:3000/psnllgnd';

  constructor(private http: HttpClient) { }


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

  getStory(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get<any>(`${this.dbUrl}/personalstories`, httpOption)
  }

  getLegend(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get<any>(`${this.dbUrl}/urbanlegends`, httpOption)

  }

  makeStory(body): Observable<any[]> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post<any>(`${this.dbUrl}/post`, body, httpOption)
  }

  updateStory(body, id): Observable<any> {

    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }

    return this.http.put<any>(`${this.dbUrl}/update/${id}`, body, httpOption)

  }



  deleteStory(id): Observable<any[]> {
    const httpOptionsB = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.delete<any>(`${this.dbUrl}/delete/${id}`, httpOptionsB)


  }

  deleteLegend(id): Observable<any> {
    const httpOptionsB = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.delete<any>(`${this.dbUrl}/delete/${id}`, httpOptionsB)
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