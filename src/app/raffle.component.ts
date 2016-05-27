import { Component } from '@angular/core';
import { ApplicationFormComponent } from './application-form/application-form.component'
import { ActionComponent } from './action/action.component'
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { RaffleService } from './services/raffle.service';

@Component({
  moduleId: module.id,
  selector: 'raffle-app',
  templateUrl: 'raffle.component.html',
  styleUrls: ['raffle.component.css'],
  directives: [ApplicationFormComponent, ActionComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, RaffleService]
})
@Routes([
  {path: '/form',    component: ApplicationFormComponent},
  {path: '/',    component: ApplicationFormComponent},
  {path: '/raffle',    component: ActionComponent}
])

export class RaffleAppComponent {
  display: string;
  members: any;

  constructor(private router: Router, private raffleService: RaffleService) {
  }

  ngOnInit() {
    this.members = this.raffleService.getParticipants();
  }

  goTo(where: string) {
    this.router.navigate(['/' + where]);
  }

}
