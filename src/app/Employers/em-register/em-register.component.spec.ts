import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmRegisterComponent } from './em-register.component';

describe('EmRegisterComponent', () => {
  let component: EmRegisterComponent;
  let fixture: ComponentFixture<EmRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
