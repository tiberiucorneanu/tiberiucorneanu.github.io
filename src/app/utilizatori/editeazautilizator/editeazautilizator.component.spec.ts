import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeazautilizatorComponent } from './editeazautilizator.component';

describe('EditeazautilizatorComponent', () => {
  let component: EditeazautilizatorComponent;
  let fixture: ComponentFixture<EditeazautilizatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeazautilizatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeazautilizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
