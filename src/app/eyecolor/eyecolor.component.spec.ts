import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyecolorComponent } from './eyecolor.component';

describe('EyecolorComponent', () => {
  let component: EyecolorComponent;
  let fixture: ComponentFixture<EyecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
