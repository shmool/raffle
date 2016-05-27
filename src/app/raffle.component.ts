import { Component } from '@angular/core';
import { ApplicationFormComponent } from './application-form/application-form.component'
import { ActionComponent } from './action/action.component'
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'raffle-app',
  templateUrl: 'raffle.component.html',
  styleUrls: ['raffle.component.css'],
  directives: [ApplicationFormComponent, ActionComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/form',    component: ApplicationFormComponent},
  {path: '/',    component: ApplicationFormComponent},
  {path: '/raffle',    component: ActionComponent}
])

export class RaffleAppComponent {
  display: string;
  members: any;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  goTo(where: string) {
    this.router.navigate(['/' + where]);
  }

  isForm() {
    return this.display === 'form';
  }
  
  isRaffle() {
    return this.display === 'raffle';
  }

}
