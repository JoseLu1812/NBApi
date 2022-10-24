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

  westStandings: West[] = [];
  eastStandings: East[] = [];
  teamList: Team[] = [];
  westTeams: Team[] = [];
  eastTeams: Team[] = [];

  constructor(private standingsService: StandingsService, private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getWestStandings('20190312');
    this.getEastStandings('20190312');
  }

  getEastStandings(date: string) {
    this.standingsService.getStandings(date).subscribe(res => {
      this.eastStandings = res.league.standard.conference.east;
      this.getTeamsOfEastConference();
    });
  }

  getTeamsOfEastConference() {
    this.teamsService.getTeams(2019).subscribe(res => {
      this.teamList = res.league.standard;
      for (let e of this.eastStandings) {
        for (let t of this.teamList) {
          if (t.teamId == e.teamId) {
            this.eastTeams.push(t);
          }
        }
      }
    });
  }

  getWestStandings(date: string) {
    this.standingsService.getStandings(date).subscribe(res => {
      this.westStandings = res.league.standard.conference.west;
      this.getTeamsOfWestConference();
    });
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
    });
  }

  showTeamImages(t: string) {
    return `https://cdn.nba.com/logos/nba/${t}/global/L/logo.svg`
  }

}
