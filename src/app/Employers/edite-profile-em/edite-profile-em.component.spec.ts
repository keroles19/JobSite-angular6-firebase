import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProfileEmComponent } from './edite-profile-em.component';

describe('EditeProfileEmComponent', () => {
  let component: EditeProfileEmComponent;
  let fixture: ComponentFixture<EditeProfileEmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeProfileEmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeProfileEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
