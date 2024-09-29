import {Component, forwardRef, Input} from '@angular/core';
import {TransactionTypeEnum} from "../../core/enums/transactionType.enum";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-select-category-type',
  templateUrl: './select-category-type.component.html',
  styleUrls: ['./select-category-type.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCategoryTypeComponent),
      multi: true
    }
  ]
})
export class SelectCategoryTypeComponent implements ControlValueAccessor {
  @Input() withLabel: boolean = true;
  type: TransactionTypeEnum = TransactionTypeEnum.EXPENSE;
  types: TransactionTypeEnum[] = Object.keys(TransactionTypeEnum) as TransactionTypeEnum[];
  _onChange: (fn: any) => void = () => {};

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.type = obj;
  }

  onChange(event: any) {
    this._onChange(event.target.value);
  }
}
