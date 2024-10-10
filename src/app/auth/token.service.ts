import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public isAuth = new BehaviorSubject(false)

  constructor(private router:Router) { 
    const token = this.getToken();
    if(token){
      this.tokenChange()
    }
  }

  tokenChange(){
    this.isAuth.next(true)
  }

  saveToken(token:any){
    this.tokenChange();
    localStorage.setItem('userToken',JSON.stringify(token))
  }

  getToken(){
    const token = localStorage.getItem('userToken')
    return token ? token :null
  }

  removeToken(){
    localStorage.removeItem('userToken')
    this.isAuth.next(false)
    this.router.navigate(['auth'])
  }
}
