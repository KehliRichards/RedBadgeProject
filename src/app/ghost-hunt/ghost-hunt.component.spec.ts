import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostHuntComponent } from './ghost-hunt.component';

describe('GhostHuntComponent', () => {
  let component: GhostHuntComponent;
  let fixture: ComponentFixture<GhostHuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostHuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
