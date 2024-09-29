import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {TransactionTypeEnum} from "../../core/enums/transactionType.enum";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CategoryGetDto} from "../../core/dtos/category/categoryGetDto";
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCategoryComponent),
      multi: true
    }
  ]
})
export class SelectCategoryComponent implements ControlValueAccessor, OnInit {
  @Input() withLabel: boolean = true;
  values: CategoryGetDto[] = [];
  value: CategoryGetDto = {} as CategoryGetDto;

  constructor(private readonly categoryService: CategoryService) {
  }
  ngOnInit() {
    this.categoryService.categories.subscribe(categories => this.values = categories);
  }

  _onChange: (fn: any) => void = () => {};

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  onChange(event: any) {
    this._onChange(event.target.value);
  }
}
