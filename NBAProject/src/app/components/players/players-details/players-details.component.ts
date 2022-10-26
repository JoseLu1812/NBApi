import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';
import { Team } from "src/app/interfaces/teams.interface";
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css'],
})
export class PlayersDetailsComponent implements OnInit {

  player: Player = {} as Player;
  teamOfPlayer: Team = {} as Team;
  year: number = 0;
  id: string = '';
  playerList: Player[] = [];
  teamList: Team[] = [];

  constructor(
    private playersService: PlayersService,
    private route: ActivatedRoute,
    private teamService: TeamsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((resp) => {
      this.year = resp['year'];
      this.id = resp['personId'];
    });
    this.getPlayer();
    this.getPlayerTeam();
  }

  getPlayer() {
    this.playersService.getPlayerList(this.year).subscribe((resp) => {
      this.playerList = resp.league.standard;
      for (let p of this.playerList) {
        if (p.personId == this.id) {
          this.player = p;
        }
      }
    });
  }

  getPlayerTeam() {
    this.teamService.getTeams(this.year).subscribe(resp => {
      this.teamList = resp.league.standard;
      for (let t of this.teamList) {
        if (t.teamId == this.player.teamId) {
          this.teamOfPlayer = t;
        }
      }
    })
  }

  showPlayerImages(p: Player) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${p.personId}.png`;
  }

  showTeamsImages(p: Player) {
    let urlImg = ``;
    for (let t of p.teams) {
      urlImg = `https://cdn.nba.com/logos/nba/${t.teamId}/global/L/logo.svg`;
    }
    return urlImg;
  }
}
