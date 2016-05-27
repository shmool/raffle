import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'raffle-application-form',
  templateUrl: 'application-form.component.html',
  styleUrls: ['application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  name: string;
  email: string;
  comments: string;

  constructor() {}

  ngOnInit() {
    if (!window.localStorage.getItem('raffle')) {
      window.localStorage.setItem('raffle', '[]');
    }
  }

  submit() {
    let members = JSON.parse(window.localStorage.getItem('raffle'));
    members.push({name: this.name, email: this.email, comments: this.comments});
    window.localStorage.setItem('raffle', JSON.stringify(members));
    this.reset()
  }

  reset() {
    this.name = '';
    this.email = '';
    this.comments = '';
  }

}
