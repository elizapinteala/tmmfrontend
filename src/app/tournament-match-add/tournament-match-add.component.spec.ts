import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentMatchAddComponent } from './tournament-match-add.component';

describe('TournamentMatchAddComponent', () => {
  let component: TournamentMatchAddComponent;
  let fixture: ComponentFixture<TournamentMatchAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentMatchAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentMatchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
