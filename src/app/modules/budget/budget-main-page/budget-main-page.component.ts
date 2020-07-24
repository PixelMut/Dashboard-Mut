import { Component, OnInit } from '@angular/core';
import {BudgetItem} from '../../../models/b/budget-item';
import {updateEvent} from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-budget-main-page',
  templateUrl: './budget-main-page.component.html',
  styleUrls: ['./budget-main-page.component.scss']
})
export class BudgetMainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem): void{
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item): void{
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: updateEvent){
    // replace the item with the updated submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    //update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

}
