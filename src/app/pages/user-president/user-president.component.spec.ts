import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPresidentComponent } from './user-president.component';

describe('UserPresidentComponent', () => {
  let component: UserPresidentComponent;
  let fixture: ComponentFixture<UserPresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
