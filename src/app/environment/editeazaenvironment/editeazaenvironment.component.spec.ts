import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeazaenvironmentComponent } from './editeazaenvironment.component';

describe('EditeazaenvironmentComponent', () => {
  let component: EditeazaenvironmentComponent;
  let fixture: ComponentFixture<EditeazaenvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeazaenvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeazaenvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
