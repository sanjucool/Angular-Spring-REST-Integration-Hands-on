import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { addEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserRegistationService } from './user-registation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    addEmployeeComponent,
    EmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserRegistationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
