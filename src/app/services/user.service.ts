import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = '';
  user: User = new User();
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Promise<boolean> {
    //this.isLoggedIn = true;
    let promise = new Promise<boolean>((resolve, reject) => {

      // test purposes //////////////
      this.user = new User('1', 'shaniel', 'shaniel111@gmail.com', 'test');
      this.isLoggedIn = true;
      resolve(true);
      ///////////////////////////////

      this.http.post(`${environment.apiUrl}/users/login`, { username: username, password: password }).subscribe((data: User) => {
        this.user._id = data._id;
        this.user.email = data.email;
        this.user.token = data.token;

        if (this.user._id != '') {
          this.isLoggedIn = true;
          resolve(true);
        }
        else {
          this.user = new User();
          this.isLoggedIn = false;
          resolve(false);
        }
      },
        error => {
          this.isLoggedIn = false;
          reject(error)
        }
      );
    });

    return promise;


  }

  logout(username: string, password: string) : Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/logout`, {user: this.user});
  }

  logoutAll(username: string, password: string) : Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/logoutAll`, {user: this.user});
  }

  UserProfile(){
    return this.http.get(`${environment.apiUrl}/users/me`);
  }

  EditUserProfile(){
    return this.http.patch(`${environment.apiUrl}/users/me`, {user: this.user});
  }
  
  signup(username, email, password) : Observable<any> {
    let user = {
      username: username,
      email: email,
      password: password
    }

    return this.http.post(`${environment.apiUrl}/users`, user);
  }
}
