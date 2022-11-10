import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';
import {Router} from '@angular/router';
import { Employee } from '../employee';
@Component({
  selector: 'app-serach',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:any;
  id:number;
  
  constructor(private service:UserRegistationService,private router:Router) { }


public deleteEmployee(id:number){
 let resp= this.service.deleteEmployee(id);
 resp.subscribe((data)=>this.employees=data);
}

public getEmployeeById(){
  let resp= this.service.getEmployeeById(this.id);
  resp.subscribe((data)=>this.employees=data);
 }

  ngOnInit() {
    let resp=this.service.getEmployees();
    resp.subscribe((data)=>this.employees=data);
  }

  onclick(){
    this.router.navigate(['/add']);
  }

  openUdateteEmployee(emp){
    this.id=emp.id;
     this.router.navigate(['/update/'+this.id]);
  }

  openDeleteEmployee(id){
    this.id=id;
     this.router.navigate(['/delete/'+this.id]);
  }

}
