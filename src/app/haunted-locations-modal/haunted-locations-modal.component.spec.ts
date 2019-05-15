import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HauntedLocationsModalComponent } from './haunted-locations-modal.component';

describe('HauntedLocationsModalComponent', () => {
  let component: HauntedLocationsModalComponent;
  let fixture: ComponentFixture<HauntedLocationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HauntedLocationsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HauntedLocationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
