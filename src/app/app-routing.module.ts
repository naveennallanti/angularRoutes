import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponentComponent} from './app/components/employee-list-component/employee-list-component.component';
import {DepartmentListComponentComponent} from './app/components/department-list-component/department-list-component.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentListComponentComponent},
  {path: 'employees', component: EmployeeListComponentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule{}
export const routingComponents=[DepartmentListComponentComponent,EmployeeListComponentComponent]
