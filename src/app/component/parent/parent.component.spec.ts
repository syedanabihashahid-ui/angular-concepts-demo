import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store user data correctly', () => {
    const mockUser = { name: 'Nabiha', email: 'test@test.com' };

    component.getUserData(mockUser);

    expect(component.receivedUser()).toEqual(mockUser);
  });
});
