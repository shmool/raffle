import { Component, OnInit } from '@angular/core';
import { WinnerComponent } from '../winner/winner.component'

@Component({
  moduleId: module.id,
  selector: 'raffle-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.css'],
  directives: [WinnerComponent]
})
export class ActionComponent implements OnInit {
  members: Array<any>;
  winner: any;
  winners: Array<any>

  constructor() {}

  ngOnInit() {
    if (!window.localStorage.getItem('raffle')) {
      window.localStorage.setItem('raffle', '[]');
    }

    if (!window.localStorage.getItem('winners')) {
      window.localStorage.setItem('winners', '[]');
    }

    this.members = JSON.parse(window.localStorage.getItem('raffle'));
    this.winners = JSON.parse(window.localStorage.getItem('winners'));
  }
  
  win() {
    if (this.members.length > 0) {
      let id = Math.floor(Math.random() * this.members.length);
      this.winner = {id, name: this.members[id].name, email: this.members[id].email};
    }
  }

  updateWinners() {
    this.winners = JSON.parse(window.localStorage.getItem('winners'));
  }
}
