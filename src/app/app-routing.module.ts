import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponentComponent} from './components/employee-list-component/employee-list-component.component';
import {DepartmentListComponentComponent} from './components/department-list-component/department-list-component.component';
import {DepartmentDetailComponentComponent} from './components/department-detail-component/department-detail-component.component';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/departmentsList', pathMatch: 'full'},
  {path: 'departmentsList', component: DepartmentListComponentComponent},
  {path: 'employeesList', component: EmployeeListComponentComponent},
  {path: 'departmentsList/:id', component: DepartmentDetailComponentComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {
}

export const routingComponents = [DepartmentListComponentComponent, EmployeeListComponentComponent, DepartmentDetailComponentComponent, HomeComponent, PageNotFoundComponent];
