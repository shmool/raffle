import { Injectable } from '@angular/core';

@Injectable()
export class RaffleService {

  constructor() {
    if (!window.localStorage.getItem('raffle')) {
      window.localStorage.setItem('raffle', '[]');
    }

    if (!window.localStorage.getItem('winners')) {
      window.localStorage.setItem('winners', '[]');
    }
  }

  getParticipants():Array<RaffleParticipant> {
    return JSON.parse(window.localStorage.getItem('raffle'));
  }

  getWinners():Array<RaffleWinner> {
    return JSON.parse(window.localStorage.getItem('winners'));
  }

  submitParticipant(participant) {
    let members = JSON.parse(window.localStorage.getItem('raffle'));
    members.push({name: participant.name, email: participant.email, comments: participant.comments});
    window.localStorage.setItem('raffle', JSON.stringify(members));  
  }
  
  submitWinner(winner) {
    let winners = JSON.parse(window.localStorage.getItem('winners'));
    winners.push(winner);
    window.localStorage.setItem('winners', JSON.stringify(winners));
  }

  getNewWinner() {
    const participants = this.getParticipants();
    const winners = this.getWinners();
    let newWinner: RaffleParticipant = null;
    let id: number;
    if (participants.length > 0) {
      do {
        id = Math.floor(Math.random() * participants.length);
        newWinner = participants[id];
      } while (winners.find(winner => newWinner.email === winner.email));
    }
    return {id, name: newWinner.name, email: newWinner.email};
  }
}

export interface RaffleParticipant {
  name: string;
  email: string;
  comments: string;
}

export interface RaffleWinner {
  id: number,
  name: string;
  email: string;
}
