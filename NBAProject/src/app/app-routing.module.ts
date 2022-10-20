import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersListComponent } from './components/players/players-list/players-list.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';

const routes: Routes = [
  {path: 'players-list', component: PlayersListComponent },
  {path: '', redirectTo: '/initial-page', pathMatch: 'full'},
  {path: 'initial-page', component: InitialPageComponent},
  {path: 'teams-list', component: TeamsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
