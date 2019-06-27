import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewenvironmentComponent } from './newenvironment.component';

describe('NewenvironmentComponent', () => {
  let component: NewenvironmentComponent;
  let fixture: ComponentFixture<NewenvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewenvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewenvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
