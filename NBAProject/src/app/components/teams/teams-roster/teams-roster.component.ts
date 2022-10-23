import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/players.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams-roster',
  templateUrl: './teams-roster.component.html',
  styleUrls: ['./teams-roster.component.css']
})
export class TeamsRosterComponent implements OnInit {

  playersOfSameTeam: Player[] = [];
  team: Team = {} as Team;
  year: number = 0;
  urlName: string = '';
  teamList: Team[] = [];
  playerList: Player[] = [];

  constructor(private teamsService: TeamsService, private playersService: PlayersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.year = res['year'];
      this.urlName = res['urlName'];
    })
    this.getTeams();
    this.getPlayersOfSameTeam();
  }

  getPlayersOfSameTeam() {
    this.playersService.getPlayerList(this.year).subscribe(res => {
      this.playerList = res.league.standard;
      for (let player of this.playerList) {
        if(player.teamId == this.team.teamId) {
          this.playersOfSameTeam.push(player);
        }
      }
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

  showPlayersImages(p: Player) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${p.personId}.png`
  }

}
