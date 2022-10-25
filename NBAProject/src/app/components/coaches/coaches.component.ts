import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/interfaces/coaches.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { CoachesService } from 'src/app/services/coaches.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {

  yearsData: number[] = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
  year: number = 0;
  teamOfCoach: Team = {} as Team;
  coach: Coach = {} as Coach;
  coachList: Coach[] = [];
  teamList: Team[] = [];
  

  constructor(private coachesService: CoachesService, private teamService: TeamsService) { }

  ngOnInit(): void {
    this.getCoachList(2022);
    this.getCoachTeam();
  }

  public getCoachList(year: number){
    this.coachesService.getCoachList(year).subscribe(resp => {
      this.coachList = resp.league.standard;
      this.year = year;
    })
  }

  getCoachs(){
    for(let c of this.coachList){
      if()){

      }
    }
  }

  public getCoachTeam(){
    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
      for (let c of this.coachList) {     
        for (let t of this.teamList) {
          if (t.teamId == c.teamId) {
            this.teamOfCoach = t;
          }        
        }
      }
    })
  }

  showCoachImages(c: Coach) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${c.personId}.png`;
  }

}
