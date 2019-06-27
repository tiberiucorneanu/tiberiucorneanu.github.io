import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewutilizatoriComponent } from './newutilizatori.component';

describe('NewutilizatoriComponent', () => {
  let component: NewutilizatoriComponent;
  let fixture: ComponentFixture<NewutilizatoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewutilizatoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewutilizatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
