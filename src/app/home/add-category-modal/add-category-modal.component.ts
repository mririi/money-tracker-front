import {Component} from '@angular/core';
import {AbstractCustomModalDirective} from "../../shared/custom-modal/abstract-custom-modal.directive";
import {CategoryGetDto} from "../../core/dtos/category/categoryGetDto";
import {CategoryPostDto} from "../../core/dtos/category/categoryPostDto";
import {CategoryApiService} from "../../core/apis/category.api.service";

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent extends AbstractCustomModalDirective {
  profileId: number = -1;
  category: CategoryGetDto = {} as CategoryGetDto;

  constructor(private readonly categoryApiService: CategoryApiService) {
    super();
  }

  onSave() {
    if (!this.category) {
      return;
    }
    const postCategory: CategoryPostDto = {
      name: this.category.name,
      type: this.category.type,
      profileId: this.profileId
    }
    this.categoryApiService.createCategory(postCategory).subscribe({
      next: () => {
        this.onResult();
      },
      error: () => {
      },
    });
  }
}
