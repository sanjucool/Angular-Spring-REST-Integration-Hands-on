import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public addEmployee(emp){
    return this.http.post("http://cde21ij028employeeservice-env.eba-u6efgfhz.ap-south-1.elasticbeanstalk.com/employees",emp,{responseType:'text' as 'json'});
  }

  public getEmployees(){
    return this.http.get("http://cde21ij028employeeservice-env.eba-u6efgfhz.ap-south-1.elasticbeanstalk.com/employees");
  }

  public getEmployeeById(id){
    return this.http.get("http://cde21ij028employeeservice-env.eba-u6efgfhz.ap-south-1.elasticbeanstalk.com/employees/"+id);
  }

  public deleteEmployee(id){
    return this.http.delete("http://cde21ij028employeeservice-env.eba-u6efgfhz.ap-south-1.elasticbeanstalk.com/employees/"+id);
  }

  public updateEmployee(emp){
    return this.http.put("http://localhost:9000/employees",emp,{responseType:'text' as 'json'});
  }
}
