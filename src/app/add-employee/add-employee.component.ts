import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { UserRegistationService } from '../user-registation.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class addEmployeeComponent implements OnInit {


  employee: Employee=new Employee(0,"","",0,0);
  message:any;

  constructor(private service:UserRegistationService,private router:Router) { }

  ngOnInit() {
  }
  

public add(){
let resp=this.service.addEmployee(this.employee);
resp.subscribe((data)=>{this.router.navigate(['/employees']);});

  }

public cancel(){
  this.router.navigate(['/employees']);
}

}
