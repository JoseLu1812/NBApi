import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teamList: Team[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getTeams(2020).subscribe(resp => {
      this.teamList = resp.league.standard;
    })
  }

  showTeamImages(t: Team) {
    return `https://cdn.nba.com/logos/nba/${t.teamId}/global/L/logo.svg`
  }

}
