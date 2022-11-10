import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Employee } from '../employee';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee!:Employee
  constructor(private service:UserRegistationService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.service.getEmployeeById(id).subscribe((data)=>{
      this.employee=data;
    });

  }

  public update(){
    this.service.updateEmployee(this.employee).subscribe(data=>this.router.navigate(['/employees']));
  }

  public cancel(){
    this.router.navigate(['/employees']);
  }
}
