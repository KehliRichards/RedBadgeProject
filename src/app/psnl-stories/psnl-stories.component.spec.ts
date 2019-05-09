import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsnlStoriesComponent } from './psnl-stories.component';

describe('PsnlStoriesComponent', () => {
  let component: PsnlStoriesComponent;
  let fixture: ComponentFixture<PsnlStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsnlStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsnlStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
