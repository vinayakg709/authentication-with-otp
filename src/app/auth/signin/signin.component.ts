import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/auth/shared/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  data: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    console.log(form.value);
    this.userService.loginUser(form.value)
    .subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      err =>  console.log(err)
    );

    this.userService.tokenUser(form.value).subscribe();
  }

}
