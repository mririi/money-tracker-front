import {TransactionTypeEnum} from "../../enums/transactionType.enum";
import {TransactionGetDto} from "../transaction/transactionGetDto";

export interface CategoryPostDto {
  name: string;
  type: TransactionTypeEnum;
  profileId: number;
}
