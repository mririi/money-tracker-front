import {Component} from '@angular/core';
import {CategoryGetDto} from "../../core/dtos/category/categoryGetDto";
import {CategoryApiService} from "../../core/apis/category.api.service";
import {AbstractCustomModalDirective} from "../../shared/custom-modal/abstract-custom-modal.directive";
import {ProfileService} from "../../core/services/profile.service";
import {CategoryPatchDto} from "../../core/dtos/category/categoryPatchDto";

@Component({
  selector: 'app-update-category-modal',
  templateUrl: './update-category-modal.component.html',
  styleUrls: ['./update-category-modal.component.scss']
})
export class UpdateCategoryModalComponent extends AbstractCustomModalDirective {
  category: CategoryGetDto = {} as CategoryGetDto;
  constructor(private readonly categoryApiService: CategoryApiService, private readonly profileService: ProfileService) {
    super()
  }
  onSubmit(): void {
    this.categoryApiService.updateCategory(this.category.id, this.category as CategoryPatchDto).subscribe({
      next: () => {
        this.onResult();
      },
      error: error => console.error(error)
    });
  }

  onDelete() {
    this.categoryApiService.deleteCategory(this.category.id).subscribe({
      next: () => {
        this.profileService.reload()
        this.onResult();
      }
    });
  }
}
