import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSectionComponent } from './categories-section.component';

describe('CategoriesSectionComponent', () => {
  let component: CategoriesSectionComponent;
  let fixture: ComponentFixture<CategoriesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesSectionComponent]
    });
    fixture = TestBed.createComponent(CategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
