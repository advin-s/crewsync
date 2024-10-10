import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm!:FormGroup; 

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^\d+$/),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    console.log(this.userForm.value);
    
  }

}
