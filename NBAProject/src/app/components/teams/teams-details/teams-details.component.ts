import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {

  team: Team = {} as Team;
  year: number = 0;
  urlName: string = '';
  teamList: Team[] = [];

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.year = res['year'];
      this.urlName = res['urlName'];
    })
    this.getTeams();
  }

  getTeams() {
    this.teamsService.getTeams(this.year).subscribe(res => {
      this.teamList = res.league.standard;
      for (let team of this.teamList) {
        if(team.urlName == this.urlName) {
          this.team = team;
        }
      }
    })
  }

  showTeamImages(t: Team) {
    return `https://cdn.nba.com/logos/nba/${t.teamId}/global/L/logo.svg`;
  }

}
