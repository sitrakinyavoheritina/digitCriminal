import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommissaireComponent } from './user-commissaire.component';

describe('UserCommissaireComponent', () => {
  let component: UserCommissaireComponent;
  let fixture: ComponentFixture<UserCommissaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCommissaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommissaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
