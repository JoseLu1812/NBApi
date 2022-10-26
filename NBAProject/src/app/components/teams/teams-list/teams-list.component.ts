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
  yearsData: number[] = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
  year: number = 0;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getTeamsByYear(2022);
  }

  getTeamsByYear(year: number) {
    this.teamsService.getTeams(year).subscribe(resp => {
      this.teamList = resp.league.standard;
      this.year = year;
    })
  }


}
