import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'raffle-winner',
  templateUrl: 'winner.component.html',
  styleUrls: ['winner.component.css'],
  inputs: ['winner'],
  outputs: ['win']
})
export class WinnerComponent implements OnInit {
  winner: any;
  submitted: boolean;
  win = new EventEmitter<{ winner }>();

  constructor() {
  }

  ngOnInit() {

  }

  submit() {
    this.winner.submitted = true;
    let winners = JSON.parse(window.localStorage.getItem('winners'));
    winners.push(this.winner);
    window.localStorage.setItem('winners', JSON.stringify(winners));
    this.win.emit(this.winner);
  }

}
