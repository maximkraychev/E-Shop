import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBooksSectionComponent } from './new-books-section.component';

describe('NewBooksSectionComponent', () => {
  let component: NewBooksSectionComponent;
  let fixture: ComponentFixture<NewBooksSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBooksSectionComponent]
    });
    fixture = TestBed.createComponent(NewBooksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
