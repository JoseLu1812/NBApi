import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersListComponent } from './components/players/players-list/players-list.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { PlayersDetailsComponent } from './components/players/players-details/players-details.component';
import { TeamsDetailsComponent } from './components/teams/teams-details/teams-details.component';
import { TeamsRosterComponent } from './components/teams/teams-roster/teams-roster.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { StandingsComponent } from './components/standings/standings.component';

const routes: Routes = [
  {path: 'players-list', component: PlayersListComponent },
  {path: '', redirectTo: '/initial-page', pathMatch: 'full'},
  {path: 'initial-page', component: InitialPageComponent},
  {path: 'teams-list', component: TeamsListComponent},
  {path: 'player-details/:year/:personId', component: PlayersDetailsComponent},
  {path: 'team-details/:year/:urlName', component: TeamsDetailsComponent},
  {path: 'team-roster/:year/:teamId', component: TeamsRosterComponent},
  {path: 'standings', component: StandingsComponent},
  {path: '**', component: ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

