import { Injectable } from '@angular/core';

import {BudgetItem} from '../../models/b/budget-item';
import {BUDGET_ITEMS} from '../../models/b/mock-budget';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  mock_budget: BudgetItem[] = BUDGET_ITEMS;
  // if(this.authSrv.isLogged === true){
  // }else{
  // }
  constructor(private authSrv: AuthService) { }

  getBudgets(): any{
    if(this.authSrv.isLogged === true){

    }else{
      return of(this.mock_budget);
    }
  }

  addItem(budgetItem): Observable<BudgetItem[]>{
    this.mock_budget.push(budgetItem);
    return of(this.mock_budget)
    // this.totalBudget += newItem.amount;
  }

  deleteItem(item): Observable<BudgetItem[]>{
    const index = this.mock_budget.indexOf(item);
    this.mock_budget.splice(index, 1);
    return of(this.mock_budget)
  }

  updateItem(item){
    // replace the item with the updated submitted item from the form
    this.mock_budget[this.mock_budget.indexOf(item.old)] = item.new;
    return of(this.mock_budget)
    // //update the total budget
    // this.totalBudget -= item.old.amount;
    // this.totalBudget += item.new.amount;
  }
}
