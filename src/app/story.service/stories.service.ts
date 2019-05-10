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

}