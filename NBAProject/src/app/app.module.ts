import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayersListComponent } from './components/players/players-list/players-list.component';
import { PlayersDetailsComponent } from './components/players/players-details/players-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { TeamsDetailsComponent } from './components/teams/teams-details/teams-details.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TeamsRosterComponent } from './components/teams/teams-roster/teams-roster.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { StandingsComponent } from './components/standings/standings.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { OneTeamComponent } from './components/teams/one-team/one-team.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayersDetailsComponent,
    InitialPageComponent,
    TeamsListComponent,
    TeamsDetailsComponent,
    TeamsRosterComponent,
    ErrorPageComponent,
    StandingsComponent,
    CoachesComponent,
    OneTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
