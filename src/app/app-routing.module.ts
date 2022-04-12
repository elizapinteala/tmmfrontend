import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player-add/player-add.component';
import { EditPLayersComponent } from './player-edit/player-edit.component';
import { PlayersComponent } from './player-list/player-list.component';
import { CourtComponent } from './court-add/court-add.component';
import { EditCourtComponent } from './court-edit/court-edit.component';
import { CourtsComponent } from './court-list/court-list.component';
import { RefereesComponent } from './referee-list/referee-list.component';
import { RefereeComponent } from './referee-add/referee-add.component';
import { TournamentMatchListComponent } from './tournament-match-list/tournament-match-list.component';
import { TournamentMatchAddComponent } from './tournament-match-add/tournament-match-add.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultAddComponent } from './result-add/result-add.component';
import { ReportAddComponent } from './report-add/report-add.component';
import { ReportListComponent } from './report-list/report-list.component';
import { TournamentMatchEditComponent } from './tournament-match-edit/tournament-match-edit.component';
import { RefereeEditComponent } from './referee-edit/referee-edit.component';
import { ReportGraphComponent } from './report-graph/report-graph.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'players/add', component: PlayerComponent },
  { path: 'players/edit/:id', component: EditPLayersComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'courts/add', component: CourtComponent },
  { path: 'courts/edit/:id', component: EditCourtComponent },
  { path: 'courts', component: CourtsComponent },
  { path: 'referees', component: RefereesComponent },
  { path: 'referees/add', component: RefereeComponent },
  { path: 'referees/edit/:id', component: RefereeEditComponent },
  { path: 'tournamentMatch', component: TournamentMatchListComponent },
  { path: 'tournamentMatch/add', component: TournamentMatchAddComponent },
  { path: 'result/add', component: ResultAddComponent },
  { path: 'result', component: ResultListComponent },
  { path: 'report/add', component: ReportAddComponent },
  { path: 'report', component: ReportListComponent },
  { path: 'report/view', component: ReportGraphComponent },
  { path: 'tournamentMatch/edit/:id', component: TournamentMatchEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
