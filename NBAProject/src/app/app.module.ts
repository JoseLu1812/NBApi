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
    MaterialImportsModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
