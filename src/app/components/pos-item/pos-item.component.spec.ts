import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosItemComponent } from './pos-item.component';

describe('PosItemComponent', () => {
  let component: PosItemComponent;
  let fixture: ComponentFixture<PosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
