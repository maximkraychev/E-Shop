import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsSectionComponent } from './blog-posts-section.component';

describe('BlogPostsSectionComponent', () => {
  let component: BlogPostsSectionComponent;
  let fixture: ComponentFixture<BlogPostsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostsSectionComponent]
    });
    fixture = TestBed.createComponent(BlogPostsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
