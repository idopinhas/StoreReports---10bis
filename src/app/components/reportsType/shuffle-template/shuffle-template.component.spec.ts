import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleTemplateComponent } from './shuffle-template.component';

describe('ShuffleTemplateComponent', () => {
  let component: ShuffleTemplateComponent;
  let fixture: ComponentFixture<ShuffleTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuffleTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
