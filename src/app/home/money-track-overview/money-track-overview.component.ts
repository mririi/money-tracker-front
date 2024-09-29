import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProfileApiService} from "../../core/apis/profile.api.service";
import {ProfileService} from "../../core/services/profile.service";
import {ProfileGetDto} from "../../core/dtos/profil/profileGetDto";
import {ProfileTokenPostDto} from "../../core/dtos/profil/profileTokenPostDto";
import {CategoryGetDto} from "../../core/dtos/category/categoryGetDto";
import {CategoryApiService} from "../../core/apis/category.api.service";
import {CategoryService} from "../../core/services/category.service";

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
}
