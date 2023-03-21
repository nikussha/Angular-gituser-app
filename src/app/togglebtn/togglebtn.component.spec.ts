import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglebtnComponent } from './togglebtn.component';

describe('TogglebtnComponent', () => {
  let component: TogglebtnComponent;
  let fixture: ComponentFixture<TogglebtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglebtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
