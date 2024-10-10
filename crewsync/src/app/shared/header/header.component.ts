import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showLogout:boolean = false

  constructor(private tokenService:TokenService){}

  ngOnInit(): void {
    this.tokenService.isAuth.subscribe(res =>{
      if(res){
        this.showLogout = true
      }
    })
  }

  onLogout(){
    this.tokenService.removeToken()
  }

}
