import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService, private tokenService:TokenService, private router:Router){}

  ngOnInit(): void {
    this.tokenService.isAuth.subscribe(res => {
      if(res){
        this.router.navigate([''])
      }
    })
  }

  onSubmit(loginForm:NgForm){
    this.authService.onLogin({...loginForm.value,returnSecureToken:true})
  }
}
