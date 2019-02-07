import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/auth/shared/user.service';
import { User } from 'src/app/auth/shared/user.model';


@Component({
  selector: 'app-signnup',
  templateUrl: './signnup.component.html',
  styleUrls: ['./signnup.component.css']
})
export class SignnupComponent implements OnInit {
  user: User;
  data: any;
  error: any;
  id: number;
  constructor(private userService: UserService, 
    ) { }

  ngOnInit() {

  }

  reserform(form? : NgForm){
    if (form != null)
    form.reset();
    this.user = {
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    }
  }

  onSignup(form: NgForm){
    console.log(form.value);
    this.userService.registerUser(form.value)
    .subscribe(
      res => {
        this.data = res;
        this.id = this.data.user_id;
        console.log(this.id);
      },
      err =>  console.log(err)
    );


  }

  

  


}
