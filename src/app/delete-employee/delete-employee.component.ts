import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Employee } from '../employee';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employee!:Employee
  id!:Employee
  constructor(private service:UserRegistationService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.service.getEmployeeById(this.id).subscribe((data)=>{
      this.employee=data;
    });

  }

  public delete(){
    this.service.deleteEmployee(this.id).subscribe(data=>this.router.navigate(['/employees']));
  }

  public cancel(){
    this.router.navigate(['/employees']);
  }

}
