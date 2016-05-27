import { Component, OnInit } from '@angular/core';
import { WinnerComponent } from '../winner/winner.component'
import {RaffleService, RaffleParticipant, RaffleWinner} from '../services/raffle.service';


@Component({
  moduleId: module.id,
  selector: 'raffle-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.css'],
  directives: [WinnerComponent]
})
export class ActionComponent implements OnInit {
  winner: RaffleWinner;
  winners: Array<RaffleWinner>

  constructor(private raffleService: RaffleService) {}

  ngOnInit() {
    this.winners = this.raffleService.getWinners();
  }
  
  win() {
    this.winner = this.raffleService.getNewWinner();
  }

  updateWinners() {
    this.winners = this.raffleService.getWinners();
  }
}
