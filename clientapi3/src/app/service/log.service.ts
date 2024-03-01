import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Log } from '../model/log';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private logUrl:string;

  constructor(private http: HttpClient) { 
    this.logUrl = 'http://localhost:8080/log';
  }

  public findAll(): Observable<Log[]> {
    return this.http.get<Log[]>(this.logUrl+'/all');
  }

}
