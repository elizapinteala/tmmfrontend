import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { Player } from '../_models/player';
import { PlayerService } from '../_services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { faSearch, faTrash, faSpellCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})

export class PlayersComponent implements OnInit, AfterViewInit{
   
    numberOfFilters:number;
    displayedColumns = ['FirstName', 'LastName', 'Age', 'Gender','Nationality', 'Ranking', 'Favourite', 'Coach', 'filter'];
    playerList = new MatTableDataSource<Player>();
    
  
    faAdd=faPlus;
    faTrash=faTrash;
     faEdit=faSpellCheck;
    
   
    @ViewChild(MatSort, { static: false }) sort: MatSort;
  
    constructor(private playerService: PlayerService,
        private route: ActivatedRoute, private router: Router) { }
  
  
  
    ngOnInit() {
    this.getPlayers();
    this.numberOfFilters = 0;
  
    }
  
    ngAfterViewInit() {
        this.playerList.sort = this.sort;
    }
  
    getPlayers = () => {
        this.playerService.getPlayers()
            .subscribe(res => {
                this.playerList.data = res as Player[];
            })
    }
    
  
   
  
}