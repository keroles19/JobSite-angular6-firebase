import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrFieldsComponent } from './br-fields.component';

describe('BrFieldsComponent', () => {
  let component: BrFieldsComponent;
  let fixture: ComponentFixture<BrFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
