import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/service/players.service';
import { Player } from 'src/app/interfaces/players.interface';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  year = 2022 ;
  id = "0";
  playerList: Player[] = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getPlayerList(2022).subscribe(resp => {
      this.playerList = resp.league.standard;
    })
  }


  showPlayerName(name: string, lastName: string, id: string){
    for (let item of this.playerList) {
      if(item.personId == this.id){
        if((item.firstName == name) && (item.lastName == lastName)){
          return (item.firstName,'  ',item.lastName);
        }
      }
    }
    return undefined
  }

  showPlayerImage(p: Player){
    return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${p.personId}.png`
  }

}
