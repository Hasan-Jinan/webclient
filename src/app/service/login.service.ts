import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginurl="api/login"//hjghgk
  constructor(private http:HttpClient ) { }


  login(val:any):Observable<any>{//hgkkjg
    return this.http.post(this.loginurl, val);
  }

}
