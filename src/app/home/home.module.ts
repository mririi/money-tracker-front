import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {NavbarComponent} from './navbar/navbar.component';
import {MoneyTrackOverviewComponent} from './money-track-overview/money-track-overview.component';
import {CustomCardComponent} from './money-track-overview/custom-card/custom-card.component';
import {FormsModule} from '@angular/forms';
import {AddTransactionModalComponent} from './add-transaction/add-transaction-modal.component';
import {CustomTableComponent} from './money-track-overview/custom-table/custom-table.component';
import {SharedModule} from "../shared/shared.module";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbPagination, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationPrevious,
  NgbTooltip
} from "@ng-bootstrap/ng-bootstrap";
import { SelectCategoryTypeComponent } from './select-category-type/select-category-type.component';
import {TransactionTypeEnumToTextPipe} from "../core/pipes/TransactionTypeEnumToText.pipe";
import { UpdateTransactionModalComponent } from './update-transaction-modal/update-transaction-modal.component';
import { UpdateProfileModalComponent } from './update-profile-modal/update-profile-modal.component';
import { FilterTransactionsModalComponent } from './filter-transactions-modal/filter-transactions-modal.component';
import { UpdateBalanceModalComponent } from './update-balance-modal/update-balance-modal.component';
import { FloatButtonsComponent } from './float-buttons/float-buttons.component';
import { CustomCardContainerComponent } from './custom-card-container/custom-card-container.component';
import { UpdateCategoryModalComponent } from './update-category-modal/update-category-modal.component';
import {SelectCategoryComponent} from "./select-category/select-category.component";
import {AddCategoryModalComponent} from "./add-category-modal/add-category-modal.component";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MoneyTrackOverviewComponent,
    CustomCardComponent,
    AddTransactionModalComponent,
    CustomTableComponent,
    SelectCategoryTypeComponent,
    TransactionTypeEnumToTextPipe,
    UpdateTransactionModalComponent,
    UpdateProfileModalComponent,
    FilterTransactionsModalComponent,
    UpdateBalanceModalComponent,
    FloatButtonsComponent,
    CustomCardContainerComponent,
    UpdateCategoryModalComponent,
    SelectCategoryComponent,
    AddCategoryModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    NgbTooltip,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbPagination,
    NgbPaginationFirst,
    NgbPaginationPrevious,
    NgbPaginationLast,
    NgbPaginationNext,
  ],
  providers: [
    DatePipe,
    TransactionTypeEnumToTextPipe
  ]
})
export class HomeModule {
}
