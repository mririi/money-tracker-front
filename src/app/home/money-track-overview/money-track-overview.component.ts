import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProfileApiService} from "../../core/apis/profile.api.service";
import {ProfileService} from "../../core/services/profile.service";
import {ProfileGetDto} from "../../core/dtos/profil/profileGetDto";
import {ProfileTokenPostDto} from "../../core/dtos/profil/profileTokenPostDto";
import {CategoryGetDto} from "../../core/dtos/category/categoryGetDto";
import {CategoryApiService} from "../../core/apis/category.api.service";
import {CategoryService} from "../../core/services/category.service";
import {FilterTransactionsModalComponent} from "../filter-transactions-modal/filter-transactions-modal.component";
import {AddCategoryModalComponent} from "../add-category-modal/add-category-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-money-track-overview',
  templateUrl: './money-track-overview.component.html',
  styleUrls: ['./money-track-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoneyTrackOverviewComponent implements OnInit, AfterViewInit {
  balance: string = '0';
  categories: CategoryGetDto[] = [];
  profileId: number = -1;

  constructor(private readonly categoryApiService: CategoryApiService,
              private readonly categoryService: CategoryService,
              private readonly profileApiService: ProfileApiService,
              private readonly modalService: NgbModal,
              private readonly profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.loadProfile();
    this.categoryService.categories.subscribe(categories => {
      this.categories = categories;
    });
  }

  ngAfterViewInit(): void {
    this.profileService.reloaded.subscribe(() => {
      this.loadProfile();
    });
  }

  loadProfile() {
    const profileTokenPostDto: ProfileTokenPostDto = {
      token: localStorage.getItem('access_token') || '',
    }
    this.profileApiService.getProfileByToken(profileTokenPostDto).subscribe({
      next: (profile: ProfileGetDto) => {
        this.profileService.setProfile(profile);
        this.profileId = profile.id;
        this.loadCategories();
      },
      error: error => console.error("error" + error.message)
    });
  }

  loadCategories() {
    this.categoryApiService.getAllCategories(this.profileId).subscribe({
      next: (categories: CategoryGetDto[]) => {
        this.categoryService.setCategories(categories);
      },
      error: error => console.error("error" + error.message)
    });
  }

  onOpenAddCategory() {
    const popup = this.modalService.open(AddCategoryModalComponent);
    const modalRef = popup.componentInstance as AddCategoryModalComponent;
    modalRef.profileId = this.profileId;
    popup.result.then(() => {
      this.profileService.reload();
    });
  }

  onFilterTransactions() {
    // const popup = this.modalService.open(FilterTransactionsModalComponent);
    // const modalRef = popup.componentInstance as FilterTransactionsModalComponent;
    // modalRef.transactions = [...this.transactions];
    // popup.result.then((result) => {
    //   this.transactionService.setFilteredTransactions(result);
    // });
  }
}
