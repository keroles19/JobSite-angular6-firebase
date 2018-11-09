import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerJobComponent } from './employer-job.component';

describe('EmployerJobComponent', () => {
  let component: EmployerJobComponent;
  let fixture: ComponentFixture<EmployerJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
