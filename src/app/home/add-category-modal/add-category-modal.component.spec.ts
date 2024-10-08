import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryModalComponent } from './add-category-modal.component';

describe('AddTransactionComponent', () => {
  let component: AddCategoryModalComponent;
  let fixture: ComponentFixture<AddCategoryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategoryModalComponent]
    });
    fixture = TestBed.createComponent(AddCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
