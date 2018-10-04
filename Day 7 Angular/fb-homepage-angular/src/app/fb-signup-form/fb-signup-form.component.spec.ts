import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbSignupFormComponent } from './fb-signup-form.component';

describe('FbSignupFormComponent', () => {
  let component: FbSignupFormComponent;
  let fixture: ComponentFixture<FbSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
