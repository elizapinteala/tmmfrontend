import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { PlayerComponent } from './player-add/player-add.component';
import { HomeComponent } from './home/home.component';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { EditPLayersComponent } from './player-edit/player-edit.component';
import {  MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PlayersComponent } from './player-list/player-list.component';
import { CourtComponent } from './court-add/court-add.component';
import { EditCourtComponent } from './court-edit/court-edit.component';
import { CourtsComponent } from './court-list/court-list.component';
import { RefereesComponent } from './referee-list/referee-list.component';
import { RefereeComponent } from './referee-add/referee-add.component';
import { TournamentMatchListComponent } from './tournament-match-list/tournament-match-list.component';
import { ResultAddComponent } from './result-add/result-add.component';
import { ResultListComponent } from './result-list/result-list.component';
import { TournamentMatchAddComponent } from './tournament-match-add/tournament-match-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportAddComponent } from './report-add/report-add.component';
import { TournamentMatchEditComponent } from './tournament-match-edit/tournament-match-edit.component';
import { RefereeEditComponent } from './referee-edit/referee-edit.component';
import { MatMenuModule} from '@angular/material/menu';
import {ChartsModule} from 'ng2-charts';

import {
    MatDatepickerModule
} from '@angular/material/datepicker';
import { ReportGraphComponent } from './report-graph/report-graph.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [
        AppComponent,
        PlayerComponent,
        HomeComponent,
        EditPLayersComponent,
        PlayersComponent,
        CourtComponent,
        EditCourtComponent,
        CourtsComponent,
        RefereesComponent,
        RefereeComponent,
        TournamentMatchListComponent,
        ResultAddComponent,
        ResultListComponent,
        TournamentMatchAddComponent,
        ReportListComponent,
        ReportAddComponent,
        TournamentMatchEditComponent,
        RefereeEditComponent,
        ReportGraphComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
    ],
    imports: [ 
        MatMenuModule,
        MatOptionModule,
        MatTabsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatNativeDateModule,
      
        MatFormFieldModule,
        MatSelectModule,
        MatFormFieldModule, 
        MatIconModule,
        MatInputModule,
        MatDatepickerModule,
        FontAwesomeModule,
        ChartsModule
       
        
        

    ],
    providers: [DatePipe],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],


})
export class AppModule { }
