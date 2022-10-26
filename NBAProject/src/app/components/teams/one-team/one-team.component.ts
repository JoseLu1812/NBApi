import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-one-team',
  templateUrl: './one-team.component.html',
  styleUrls: ['./one-team.component.css']
})
export class OneTeamComponent implements OnInit {

  @Input() team: Team = {} as Team
  year: number = 0;
  teamList: Team[] = [];
  urlName: string = '';

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.year = res['year'];
      this.urlName = res['urlName'];
    })
    this.getTeamsByYear(2022);
    this.getTeams();
  }

  showTeamImages() {
    return `https://cdn.nba.com/logos/nba/${this.team.teamId}/global/L/logo.svg`;
  }

  getTeamsByYear(year: number) {
    this.teamsService.getTeams(year).subscribe(resp => {
      this.teamList = resp.league.standard;
      this.year = year;
    })
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


}
