import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDocheckComponent } from './child-docheck.component';

describe('ChildDocheckComponent', () => {
  let component: ChildDocheckComponent;
  let fixture: ComponentFixture<ChildDocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildDocheckComponent]
    });
    fixture = TestBed.createComponent(ChildDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
