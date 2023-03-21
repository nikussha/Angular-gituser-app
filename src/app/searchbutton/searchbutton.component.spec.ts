import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbuttonComponent } from './searchbutton.component';

describe('SearchbuttonComponent', () => {
  let component: SearchbuttonComponent;
  let fixture: ComponentFixture<SearchbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
