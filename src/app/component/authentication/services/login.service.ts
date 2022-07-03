import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {loginDTO} from "../dto/loginDTO";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  LoginUrl = environment.tokenUrl;

  constructor(private http: HttpClient) { }

  userLogin(logindto:loginDTO): Observable<any> {
    return this.http.post(this.LoginUrl+'/login', {
      "username":logindto.username,
      "password":logindto.password
    },{
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    });

  }
}
