import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostHuntModalComponent } from './ghost-hunt-modal.component';

describe('GhostHuntModalComponent', () => {
  let component: GhostHuntModalComponent;
  let fixture: ComponentFixture<GhostHuntModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostHuntModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostHuntModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
