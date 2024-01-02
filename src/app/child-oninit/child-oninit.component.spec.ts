import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOninitComponent } from './child-oninit.component';

describe('ChildOninitComponent', () => {
  let component: ChildOninitComponent;
  let fixture: ComponentFixture<ChildOninitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOninitComponent]
    });
    fixture = TestBed.createComponent(ChildOninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
