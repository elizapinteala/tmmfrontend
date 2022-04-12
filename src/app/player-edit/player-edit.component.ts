import { Component, OnInit } from '@angular/core';
import { Player } from '../_models/player';
import { PlayerService } from '../_services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-player-edit',
    templateUrl: './player-edit.component.html',
    styleUrls: ['./player-edit.component.css']
})


export class EditPLayersComponent implements OnInit {

    editplayer:Player=new Player();
    showMsg: number;
    faArrowLeft=faArrowLeft;

    constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router, location:Location) {

    }

    ngOnInit() {
        this.getPlayer();
    }

    getPlayer() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.playerService.getPlayer(id).subscribe(editPlayer => {
            console.log(editPlayer);
            this.editplayer = editPlayer
        });
    }

    editPlayer(editplayer: Player): void {

        console.log("editPlayer ----------");
        console.log(this.editplayer);
     
        this.playerService.editPlayer(this.editplayer).subscribe(data => { this.showMsg = 1; },
            error => {
                this.showMsg = 2;
            }, () => { });


    }


    // goBack() {
    //     this.location.back();
    // }

    reload() {
        location.reload();
    }

}