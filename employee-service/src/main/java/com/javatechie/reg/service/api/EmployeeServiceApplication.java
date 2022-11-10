package com.javatechie.reg.service.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import com.javatechie.reg.service.api.dao.UserRepository;
import com.javatechie.reg.service.api.model.Employee;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/employees")
public class EmployeeServiceApplication {

    @Autowired
    private UserRepository repository;

    @PostMapping
    public String addEmployee(@RequestBody Employee emp) {
        repository.save(emp);
        return "Hi " + emp.getName() + " your Registration process successfully completed";
    }
    
    @GetMapping
    public List<Employee> getEmployees() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        		Employee emp = repository.findById(id).get();
        		return emp;
    }

    @DeleteMapping("/{id}")
    public List<Employee> deleteEmployee(@PathVariable int id) {
        repository.deleteById(id);
        return repository.findAll();
    }
    
    @PutMapping
    public String updateEmployee(@RequestBody Employee emp) {
    	repository.save(emp);
    	return "Id "+emp.getId() +" is updated successfully ";
    }

    public static void main(String[] args) {
        SpringApplication.run(EmployeeServiceApplication.class, args);
    }

}


