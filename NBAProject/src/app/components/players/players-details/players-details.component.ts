import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css'],
})
export class PlayersDetailsComponent implements OnInit {
  player: Player = {} as Player;
  year: number = 0;
  id: string = '';
  playerList: Player[] = [];

  constructor(
    private playersService: PlayersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((resp) => {
      this.year = resp['year'];
      this.id = resp['personId'];
    });
    this.getPlayer();
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

  showPlayerImages(p: Player) {
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${p.personId}.png`;
  }
}
