import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './components/contracts/contracts.component';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', redirectTo: '/contracts' 
  },
  {
    path: 'contracts', component: ContractsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
