import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProfileseekComponent } from './edite-profileseek.component';

describe('EditeProfileseekComponent', () => {
  let component: EditeProfileseekComponent;
  let fixture: ComponentFixture<EditeProfileseekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeProfileseekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeProfileseekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
