import {Injectable} from "@angular/core";
import {CategoryGetDto} from "../dtos/category/categoryGetDto";
import {Observable} from "rxjs";
import {CategoryPatchDto} from "../dtos/category/categoryPatchDto";
import {CategoryPostDto} from "../dtos/category/categoryPostDto";
import {AbstractApiService} from "./abstract.api.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService extends AbstractApiService {

  getAllCategories(profileId: number): Observable<CategoryGetDto[]> {
    return this.get<CategoryGetDto[]>(`categories/${profileId}`);
  }

  deleteCategory(categoryId: number): Observable<void> {
    return this.delete<void>(`categories/${categoryId}`);
  }

  updateCategory(categoryId: number, category: CategoryPatchDto): Observable<void> {
    return this.patch<void>(`categories/${categoryId}`, category);
  }

  createCategory(category: CategoryPostDto): Observable<void> {
    return this.post<void>('categories', category);
  }

  getRevenuTotal(id: number): Observable<number> {
    const httpParams = new HttpParams().set('type', 'INCOME');
    return this.get<number>(`categories/profile/${id}/total-amount`, httpParams);
  }

  getExpenseTotal(id: number): Observable<number> {
    const httpParams = new HttpParams().set('type', 'EXPENSE');
    return this.get<number>(`categories/profile/${id}/total-amount`, httpParams);
  }

  getSavingsTotal(id: number): Observable<number> {
    const httpParams = new HttpParams().set('type', 'SAVINGS');
    return this.get<number>(`categories/profile/${id}/total-amount`, httpParams);
  }
}
