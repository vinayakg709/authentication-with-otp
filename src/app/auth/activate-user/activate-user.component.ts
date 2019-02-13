import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css'],
})
export class ActivateUserComponent implements OnInit {

  constructor(private us: UserService) { }

  ngOnInit() {
  }

  onActivate(form: NgForm){
    this.us.activateUser(form.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }


}
