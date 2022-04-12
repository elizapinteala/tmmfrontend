import { Component, OnInit, ViewChild } from '@angular/core';
import { TournamentMatch } from '../_models/tournamentMatch';
import {  FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { TournamentMatchService } from '../_services/tournamentMatch.service';
import { faSearch, faTrash, faSpellCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Match } from '../_models/match';


@Component({
  selector: 'app-tournament-match-list',
  templateUrl: './tournament-match-list.component.html',
  styleUrls: ['./tournament-match-list.component.css']
})
export class TournamentMatchListComponent  implements OnInit{
 
  numberOfFilters:number; 
  displayedColumns = ['namePlayer1', 'namePlayer2','matchDate', 'matchType', 'tour', 'courtName', 'refereeName', 'status', 'winner','score', 'filter'];
  matchList = new MatTableDataSource<TournamentMatch>();

  match:TournamentMatch[]=[];
  winner:TournamentMatch[]=[];

  winners:Match[]=[];
  
  
  namePlayer1Filter = new FormControl('');
  namePlayer2Filter = new FormControl('');
//   namePlayer3Filter = new FormControl('');
//   namePlayer4Filter = new FormControl('');

  matchDateFilter = new FormControl('');
  matchTypeFilter = new FormControl('');
  tourFilter = new FormControl('');
  courtnameFilter = new FormControl('');
  refereenameFilter = new FormControl('');
  statusFilter = new FormControl('');
  winnerFilter = new FormControl('');


  // createMatch1:TournamentMatchSummary;
  // createMatch2:TournamentMatchSummary;


  faSearch = faSearch;
  faTrash=faTrash;
  faEdit=faSpellCheck;
  faAdd=faPlus;


  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private matchService: TournamentMatchService) { 
        
      }


  ngOnInit() {
  this.getMatches();


  this.numberOfFilters = 0;
   
  
  }

  ngAfterViewInit(): void {
      this.matchList.sort = this.sort;
  }



// createMatch(){
  
//  var k=0;
 
//  console.log("winner",this.match);
//  for (var i=0; i<this.match.length; i++){
//    if(this.match[i].winner!=null)
//     {
//       this.winner[k]=this.match[i];
//       k+=1;
//     }
//     console.log("winner",this.winner);
//   for (var i=0; i<this.winner.length; i=i+2){
//       this.matchService.createMatchTable(this.winner[i],this.winner[i+1]).subscribe();
//   }
//  }
// }



  getMatches = () => {
      this.matchService.getMatches()
          .subscribe(res => {
              this.matchList.data = res as TournamentMatch[];
              this.match = res as TournamentMatch[];
              var k=0;
              for (var i=0; i<this.match.length; i++){
                if(this.match[i].winner!=null)
                 {
                   this.winner[k]=this.match[i];
                   k+=1;
                 }
                }
                for (var i=0; i<this.winner.length; i=i+2)
                {
                  let obj =new Match();
                  obj.tournamentMatch1=this.winner[i];
                  obj.tournamentMatch2=this.winner[i+1];
                  this.winners.push(obj);

                }
  
               for (var i=0; i<this.winner.length; i=i+2){
                  // this.matchService.createMatchTable(this.winner[i],this.winner[i+1]).subscribe();
                  this.matchService.createMatchTable(this.winners[i]);

               }   
          })
         
  }
  // private onSuccess(data) {
  //     this.router.navigate([`players/${data.name}`]);
  // }

  // private handleError(errorMsg) {
  //     console.log("error message: " + errorMsg);
  // }

  public filterMatches = () => {

      this.matchService.filterMatches(this.namePlayer1Filter.value,this.namePlayer2Filter.value, 
                                      this.matchTypeFilter.value, this.matchDateFilter.value, this.courtnameFilter.value, 
                                      this.refereenameFilter.value, this.statusFilter.value,  this.tourFilter.value)
          .subscribe(res => {
              this.matchList.data = res as TournamentMatch[];
          })
      this.numberOfFilters = this.matchService.numberOfFilters;

  }

//   goBack() {
//       this.location.back();
//   }

  public clearFilter = () => {
      this.namePlayer1Filter = new FormControl('');
      this.namePlayer2Filter = new FormControl('');
    //   this.namePlayer3Filter = new FormControl('');
    //   this.namePlayer4Filter = new FormControl('');

      this.matchTypeFilter = new FormControl('');
      this.matchDateFilter = new FormControl('');
      this.courtnameFilter = new FormControl('');
      this.refereenameFilter = new FormControl('');
      this.statusFilter = new FormControl('');
      this.tourFilter = new FormControl('');
  }
 
}
