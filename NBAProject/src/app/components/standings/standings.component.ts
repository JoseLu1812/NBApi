import { Component, OnInit } from '@angular/core';
import { East, West } from 'src/app/interfaces/standings.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { StandingsService } from 'src/app/services/standings.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  eastStandings: East[] = [];
  westStandings: West[] = []; //clasificacion
  westTeamStandings: West = {} as West;
  teamList: Team[] = []; //equipos
  westTeams: Team[] = []; //equipos
  eastTeams: Team[] = [];
  clasification: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor(private standingsService: StandingsService, private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getEastStandings('current');
    this.getWestStandings('20190223');
    this.getTeamsOfWestConference();
    this.getTeamsOfEastConference();
  }

  getEastStandings(date: string) {
    this.standingsService.getStandings(date).subscribe(res => {
      this.eastStandings = res.league.standard.conference.east;
    })
  }

  getWestStandings(date: string) {
    this.standingsService.getStandings(date).subscribe(res => {
      this.westStandings = res.league.standard.conference.west;
    })
  }

  getTeamsOfWestConference() {
    this.teamsService.getTeams(2019).subscribe(res => {
      this.teamList = res.league.standard;
      for (let w of this.westStandings) {
        for (let t of this.teamList) {
          if (t.teamId == w.teamId) {
            this.westTeams.push(t);
          }
        }
      }
    })
  }

  getTeamsOfEastConference() {
    this.teamsService.getTeams(2020).subscribe(res => {
      this.teamList = res.league.standard;
      for (let t of this.teamList) {
        for (let e of this.eastStandings) {
          if (t.teamId == e.teamId) {
            this.eastTeams.push(t);
          }
        }
      }
    })
  }

  showTeamImages(t: Team) {
    return `https://cdn.nba.com/logos/nba/${t.teamId}/global/L/logo.svg`
  }

}
