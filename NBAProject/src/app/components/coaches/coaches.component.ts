import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/interfaces/coaches.interface';
import { CoachesService } from 'src/app/services/coaches.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
})
export class CoachesComponent implements OnInit {
  yearsData: number[] = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
  year: number = 0;
  coachList: Coach[] = [];
  coach: Coach = {} as Coach;

  constructor(
    private coachesService: CoachesService,
    private teamService: TeamsService
  ) {}

  ngOnInit(): void {
    this.getOneCoach(2022);
  }

  getOneCoach(year: number) {
    this.coachesService.getCoachList(year).subscribe((resp) => {
      this.coachList = resp.league.standard;
      this.year = year;
      for (let c of this.coachList) {
        this.coach = c;
      }
    });
  }
  showCoachImages(c: Coach) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${c.personId}.png`;
  }
}
