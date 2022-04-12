import { OnInit, Component } from '@angular/core';
import { Player } from '../_models/player';
import { PlayerService } from '../_services/player.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-player-add',
    templateUrl: './player-add.component.html',
    styleUrls: ['./player-add.component.css']
  })

  export class PlayerComponent implements OnInit{
    
    player:Player;
    statusMessage: string;
    showMsg: number;

    faArrowLeft = faArrowLeft;
   
    
    constructor(private playerService: PlayerService, private location: Location) {
        this.player = new Player();
    
      }
 
    genderValues: Gender[] = [
        { value: "FEMALE", viewValue: 'Female' },
        { value: "MALE", viewValue: 'Male' }
      ];

    ngOnInit() {
    }

    onSubmit(form:NgForm){
        this.playerService.addPlayer(this.player).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
      error => {
        this.showMsg = 2; this.statusMessage = "error"
      }, () => { });
    }
    
    goBack() {
        this.location.back();
      }
      
  }