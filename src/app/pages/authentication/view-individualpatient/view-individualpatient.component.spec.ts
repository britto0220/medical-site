import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndividualpatientComponent } from './view-individualpatient.component';

describe('ViewIndividualpatientComponent', () => {
  let component: ViewIndividualpatientComponent;
  let fixture: ComponentFixture<ViewIndividualpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIndividualpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndividualpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
