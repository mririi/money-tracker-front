import {TransactionTypeEnum} from "../../enums/transactionType.enum";
import {TransactionGetDto} from "../transaction/transactionGetDto";

export interface CategoryPatchDto {
  name?: string;
  total?: number;
  type?: TransactionTypeEnum;
}
