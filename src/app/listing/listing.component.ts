import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  public users:any = []

  constructor(private listingService:ListingService){}

  ngOnInit(): void {
    this.listingService.getUsers()
    this.listingService.usersUpdated.subscribe((res:any)=>{
      this.users = res
    })
  }

}
