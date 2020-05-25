import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPoliceComponent } from './user-police.component';

describe('UserPoliceComponent', () => {
  let component: UserPoliceComponent;
  let fixture: ComponentFixture<UserPoliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPoliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
