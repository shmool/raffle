import {Component, OnInit, EventEmitter} from '@angular/core';
import {RaffleService} from '../services/raffle.service';

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

  constructor(private raffleService: RaffleService) {
  }

  ngOnInit() {

  }

  submit() {
    this.winner.submitted = true;
    this.raffleService.submitWinner(this.winner);
    this.win.emit(this.winner);
  }

}
