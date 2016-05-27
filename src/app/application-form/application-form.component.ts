import {Component, OnInit} from '@angular/core';
import {RaffleService, RaffleParticipant} from '../services/raffle.service';

@Component({
  moduleId: module.id,
  selector: 'raffle-application-form',
  templateUrl: 'application-form.component.html',
  styleUrls: ['application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  participant:RaffleParticipant;

  constructor(private raffleService:RaffleService) {
  }

  ngOnInit() {
    this.reset();
  }

  submit() {
    this.raffleService.submitParticipant(this.participant);
    this.reset()
  }

  reset() {
    this.participant = {
      name: '',
      email: '',
      comments: ''
    }
  }

}
