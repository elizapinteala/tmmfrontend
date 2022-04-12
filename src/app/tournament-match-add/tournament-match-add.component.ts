import { Component, OnInit } from '@angular/core';
import { TournamentMatch } from '../_models/tournamentMatch';
import { NgForm } from '@angular/forms';
import { TournamentMatchService } from '../_services/tournamentMatch.service';
import { Dropdown } from '../_shared-models/dropdown';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tournament-match-add',
  templateUrl: './tournament-match-add.component.html',
  styleUrls: ['./tournament-match-add.component.css']
})
export class TournamentMatchAddComponent implements OnInit {
    match:TournamentMatch;
    statusMessage: string;
    showMsg: number;
    faArrowLeft = faArrowLeft;

    constructor(private matchService: TournamentMatchService) {
        this.match = new TournamentMatch();
    
      }
 
      
    matchTypeValue: Dropdown[]=[
      { value: "SIMPLE", viewValue: 'simple' },
      { value: "DOUBLE", viewValue: 'double' },
      { value: "DOUBLE_MIXT", viewValue: 'double mixt' }
    ];

    statusType: Dropdown[]=[
      { value: "STARTED", viewValue: 'started' },
      { value: "ENDED", viewValue: 'ended' },
      { value: "INTRERRUPT", viewValue: 'intrerrupt' },
      { value: "POSTPONED", viewValue: 'postponed' },
      { value: "SCHEDULED", viewValue: 'scheduled' }
    ]

    
    ngOnInit() {
    }

    onSubmit(form:NgForm){
        this.matchService.addMatch(this.match).subscribe(data => { this.showMsg = 1; this.statusMessage = "success" },
      error => {
        this.showMsg = 2; this.statusMessage = "error"
      }, () => { });
    }
    

}
