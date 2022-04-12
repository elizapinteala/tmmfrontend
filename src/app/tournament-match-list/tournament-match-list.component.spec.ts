import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentMatchListComponent } from './tournament-match-list.component';

describe('TournamentMatchListComponent', () => {
  let component: TournamentMatchListComponent;
  let fixture: ComponentFixture<TournamentMatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentMatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
