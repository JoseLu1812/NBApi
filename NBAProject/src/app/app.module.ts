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
<<<<<<< HEAD
<<<<<<< HEAD
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { TeamsDetailsComponent } from './components/teams/teams-details/teams-details.component';
=======
>>>>>>> 3-players
=======
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { TeamsDetailsComponent } from './components/teams/teams-details/teams-details.component';
>>>>>>> fdb56d0248998f486172030f3568d8acb535b698
import { MaterialImportsModule } from './modules/material-imports.module';


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayersDetailsComponent,
    InitialPageComponent,
    TeamsListComponent,
    TeamsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
