import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieComponent } from './documentatie.component';

describe('DocumentatieComponent', () => {
  let component: DocumentatieComponent;
  let fixture: ComponentFixture<DocumentatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
