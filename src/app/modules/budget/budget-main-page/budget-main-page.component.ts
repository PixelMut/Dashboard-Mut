import { Component, OnInit } from '@angular/core';
import {BudgetItem} from '../../../models/b/budget-item';
import {updateEvent} from '../budget-item-list/budget-item-list.component';
import {BudgetService} from '../../../shared/services/budget.service';

@Component({
  selector: 'app-budget-main-page',
  templateUrl: './budget-main-page.component.html',
  styleUrls: ['./budget-main-page.component.scss']
})
export class BudgetMainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;

  constructor(private budgetSrv: BudgetService) { }

  ngOnInit(): void {
    this.budgetSrv.getBudgets().subscribe((b_items: any) => {
      this.budgetItems = b_items;
      this.calculGlobalAmount();
    });

  }

  calculGlobalAmount(): void{
    this.totalBudget = 0;
    this.budgetItems.forEach(item => {
      this.totalBudget += item.amount;
    });
  }

  addItem(newItem: BudgetItem): void{
    this.budgetSrv.addItem(newItem).subscribe((res)=>{
      this.budgetItems = res;
      this.calculGlobalAmount();
    });

  }

  deleteItem(item): void{
    this.budgetSrv.deleteItem(item).subscribe((res)=>{
      this.budgetItems = res;
      this.calculGlobalAmount();
    });

  }

  updateItem(updateEvent: updateEvent): void{
    this.budgetSrv.updateItem(updateEvent).subscribe((res)=>{
      this.budgetItems = res;
      this.calculGlobalAmount();
    });

  }

}
