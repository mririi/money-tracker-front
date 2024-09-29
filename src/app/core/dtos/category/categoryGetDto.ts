import {TransactionTypeEnum} from "../../enums/transactionType.enum";
import {TransactionGetDto} from "../transaction/transactionGetDto";
import {ProfileGetDto} from "../profil/profileGetDto";

export interface CategoryGetDto {
  id: number;
  name: string;
  total: number;
  type: TransactionTypeEnum;
  transactions: TransactionGetDto[];
  profile: ProfileGetDto;
}
