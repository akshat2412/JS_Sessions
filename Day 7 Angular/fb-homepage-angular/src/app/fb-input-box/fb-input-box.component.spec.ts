import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbInputBoxComponent } from './fb-input-box.component';

describe('FbInputBoxComponent', () => {
  let component: FbInputBoxComponent;
  let fixture: ComponentFixture<FbInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
