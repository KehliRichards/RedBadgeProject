import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}


@Injectable({
  providedIn: 'root'
})


export class StoriesService {
private dbUrl= 'http://localhost:3000/psnllgnd';

  
constructor(private http: HttpClient) {}

getStory() : Observable<any>{
  return this.http.get<any>(`${this.dbUrl}/personalstories/`,httpOptions)
  }

getLegend(): Observable<any>{
  return this.http.get<any>(`${this.dbUrl}/urbanlegends/`,httpOptions)

  }

  makeStory(body) : Observable<any[]>{
    return this.http.post<any>(`${this.dbUrl}/post`, body, httpOptions)
  }

  updateStory(body, id) :  Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
   
    return this.http.put<any>(`${this.dbUrl}/update/${id}`,body, httpOption)

  }



  deleteStory(id) : Observable<any[]>{
  const httpOptionsB = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': localStorage.getItem('token')
    })
  }
    return this.http.delete<any>(`${this.dbUrl}/delete/${id}`,  httpOptionsB)

  
  }

  deleteLegend(id) : Observable<any>{
    const httpOptionsB = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
      return this.http.delete<any>(`${this.dbUrl}/delete/${id}`,  httpOptionsB)
    }
}