import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseUsSectionComponent } from './why-choose-us-section.component';

describe('WhyChooseUsSectionComponent', () => {
  let component: WhyChooseUsSectionComponent;
  let fixture: ComponentFixture<WhyChooseUsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyChooseUsSectionComponent]
    });
    fixture = TestBed.createComponent(WhyChooseUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
