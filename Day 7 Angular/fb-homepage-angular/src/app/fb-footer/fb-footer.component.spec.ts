import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbFooterComponent } from './fb-footer.component';

describe('FbFooterComponent', () => {
  let component: FbFooterComponent;
  let fixture: ComponentFixture<FbFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
