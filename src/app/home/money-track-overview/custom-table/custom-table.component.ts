import {Component, Input, OnInit} from '@angular/core';
import {TransactionTypeEnum} from "../../../core/enums/transactionType.enum";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProfileService} from 'src/app/core/services/profile.service';
import {CategoryGetDto} from "../../../core/dtos/category/categoryGetDto";
import {CategoryService} from "../../../core/services/category.service";
import {UpdateCategoryModalComponent} from "../../update-category-modal/update-category-modal.component";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() profileId: number = -1;
  categories: CategoryGetDto[] = [];
  pageSize: number = 8;
  currentPage: number = 1;

  constructor(private readonly profileService: ProfileService,
              private readonly categoryService: CategoryService,
              private readonly modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.categoryService.categories.subscribe((categories: CategoryGetDto[]) => this.categories = categories)
  }

  getTypeColorClass(type: TransactionTypeEnum) {
    return 'type-' + type.toLowerCase();
  }

  onClickEdit(category: CategoryGetDto) {
    const popup = this.modalService.open(UpdateCategoryModalComponent);
    const modalRef = popup.componentInstance as UpdateCategoryModalComponent;
    modalRef.category = {...category};
    popup.result.then(() => {
      this.profileService.reload();
    });
  }

  onClose() {
    this.modalService.dismissAll();
  }
}
