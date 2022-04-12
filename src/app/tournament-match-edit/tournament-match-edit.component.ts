import { Component, OnInit } from '@angular/core';
import { TournamentMatch } from '../_models/tournamentMatch';
import { TournamentMatchService } from '../_services/tournamentMatch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tournament-match-edit',
  templateUrl: './tournament-match-edit.component.html',
  styleUrls: ['./tournament-match-edit.component.css']
})
export class TournamentMatchEditComponent implements OnInit {

  editmatch:TournamentMatch=new TournamentMatch();
  showMsg: number;
 
  faArrowLeft = faArrowLeft;

  constructor(private matchService: TournamentMatchService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
      this.getMatches();
  }

  getMatches() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.matchService.getMatch(id).subscribe(editMatch => {
          console.log(editMatch);
          this.editmatch = editMatch;
        
      });
  }

  editMatch(editmatch: TournamentMatch): void {

      console.log("editMatch ----------");
      console.log(this.editmatch);
   
      this.matchService.editMatch(this.editmatch).subscribe(data => { this.showMsg = 1; },
          error => {
              this.showMsg = 2;
          }, () => { });

  }

  

  reload() {
      location.reload();
  }

}
