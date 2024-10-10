import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ListingService {
  constructor(private http: HttpClient) {}

  public users:any = [];
  public usersUpdated = new Subject()

  getUsers() {
    this.http
      .get(
        "https://crewsync-306f4-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      )
      .subscribe((res: any) => {
        this.users = res;
        this.usersUpdated.next([...this.users])
      });
  }
}
