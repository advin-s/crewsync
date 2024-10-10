import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../shared/interfaces/interfaces';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authAddress = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMBjdZerlN6G0VMG5XuwMyy2RJCtbSJkA'

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  onLogin(user:UserLogin){
    this.http.post(this.authAddress,user).subscribe((res:any)=>{
      this.tokenService.saveToken(res)
    })
  }
}
