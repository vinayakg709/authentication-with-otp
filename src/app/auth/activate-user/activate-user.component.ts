import { Component, OnInit } from '@angular/core';
import { ActivateService } from '../shared/activate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css'],
})
export class ActivateUserComponent implements OnInit {

  constructor(private ass: ActivateService) { }

  ngOnInit() {
  }

  onActivate(form: NgForm){
    this.ass.activateUser(form.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
