import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentMatchEditComponent } from './tournament-match-edit.component';

describe('TournamentMatchEditComponent', () => {
  let component: TournamentMatchEditComponent;
  let fixture: ComponentFixture<TournamentMatchEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentMatchEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentMatchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
