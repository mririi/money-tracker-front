import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoryModalComponent } from './update-category-modal.component';

describe('UpdateCategoryModalComponent', () => {
  let component: UpdateCategoryModalComponent;
  let fixture: ComponentFixture<UpdateCategoryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCategoryModalComponent]
    });
    fixture = TestBed.createComponent(UpdateCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
