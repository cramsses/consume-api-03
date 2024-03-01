import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/user';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+'/all');
  }

  public findById(id:number): Observable<User> {
    return this.http.get<User>(this.usersUrl+'/'+id);
  }


}
