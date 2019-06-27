import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificareComponent } from './autentificare.component';

describe('AutentificareComponent', () => {
  let component: AutentificareComponent;
  let fixture: ComponentFixture<AutentificareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutentificareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutentificareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
