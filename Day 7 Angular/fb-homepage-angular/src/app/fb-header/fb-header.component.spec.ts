import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbHeaderComponent } from './fb-header.component';

describe('FbHeaderComponent', () => {
  let component: FbHeaderComponent;
  let fixture: ComponentFixture<FbHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
