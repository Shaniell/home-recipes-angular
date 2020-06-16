import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = "";//"Something went wrong. Try again later.";
  isSignUp:boolean = false;
  success = "";

  constructor(private user: UserService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  login(username, password){
    this.user.login(username, password).then((res)=>{
      if (res){
        this.error = "";
        this.router.navigate(["MainPage"])
      }
      else{
        this.error = "Something went wrong. Try again later.";
      }
    }).catch((e)=>{
      this.error = "Something went wrong. Try again later.";
      console.log(e);
    })

  }

  signup(username, email, password){
    this.user.signup(username, email, password).subscribe(data=>{
      this.success= "User created succesfully";
      this.isSignUp = false;
    },err=>{
      this.error ="Sign up error."
    });
  }
}
