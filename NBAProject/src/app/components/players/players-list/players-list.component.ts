import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/interfaces/players.interface';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  yearsData: number[] = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
  year: number = 0;
  playerList: Player[] = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.getPlayersByYear(2022);
  }

  getPlayersByYear(year: number) {
    this.playersService.getPlayerList(year).subscribe(resp => {
      this.playerList = resp.league.standard;
      this.year = year;
    })
  }

  showPlayerImage(p: Player){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${p.personId}.png`
  }

}
