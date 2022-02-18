import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaddpatientComponent } from './updateaddpatient.component';

describe('UpdateaddpatientComponent', () => {
  let component: UpdateaddpatientComponent;
  let fixture: ComponentFixture<UpdateaddpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateaddpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaddpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
