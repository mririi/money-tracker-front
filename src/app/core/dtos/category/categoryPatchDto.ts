import {TransactionTypeEnum} from "../../enums/transactionType.enum";

export interface CategoryPatchDto {
  name?: string;
  total?: number;
  type?: TransactionTypeEnum;
}
