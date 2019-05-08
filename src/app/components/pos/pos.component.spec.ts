import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosDatesComponent } from './pos-dates.component';

describe('PosDatesComponent', () => {
  let component: PosDatesComponent;
  let fixture: ComponentFixture<PosDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
