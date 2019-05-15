import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntEditModalComponent } from './hunt-edit-modal.component';

describe('HuntEditModalComponent', () => {
  let component: HuntEditModalComponent;
  let fixture: ComponentFixture<HuntEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuntEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
