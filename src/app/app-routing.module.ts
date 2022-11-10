import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { addEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
const routes: Routes = [
  {path:"",redirectTo:"employees",pathMatch:"full"},
   {path:"add",component:addEmployeeComponent},
   {path:"employees",component:EmployeeComponent},
   {path:"update/:id",component:UpdateEmployeeComponent},
   {path:"delete/:id",component:DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
