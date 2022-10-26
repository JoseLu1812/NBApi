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
  @Input() year: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showTeamImages() {
    return `https://cdn.nba.com/logos/nba/${this.team.teamId}/global/L/logo.svg`;
  }

}
