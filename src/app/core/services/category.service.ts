import {Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import {CategoryGetDto} from "../dtos/category/categoryGetDto";

@Injectable({
  providedIn:'root'
})
export class CategoryService {
  _categories: BehaviorSubject<CategoryGetDto[]> = new BehaviorSubject<CategoryGetDto[]>([]);
  categories = this._categories.asObservable();

  setCategories(categories: CategoryGetDto[]) {
    this._categories.next(categories);
  }
}
