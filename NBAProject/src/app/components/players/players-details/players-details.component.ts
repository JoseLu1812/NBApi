import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent implements OnInit {

  playerList: Player[] = [];
  id = "0";
  year= 2022;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getPlayerDetails(this.year,this.id).subscribe(resp => {
      this.playerList = resp.league.standard;
    })
  }

}
