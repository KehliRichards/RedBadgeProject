import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ULegendComponent } from './u-legend.component';

describe('ULegendComponent', () => {
  let component: ULegendComponent;
  let fixture: ComponentFixture<ULegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ULegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ULegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
