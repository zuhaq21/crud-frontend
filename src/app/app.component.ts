import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-crud';

  employeeDetails  = null as any;
  employeeToUpdate = {
    id:"",
    fName:"",
    lName:"",
    dob:"",
    idCardNumber:"",
    mobileNumber:"",
    landline:"",
    secondaryContact:"",
    temporaryAddress:"",
    permanentAddress:""
  };
  constructor(private employeeService: EmployeeService) {
    this.getEmployees();
  }
  register(registerForm: NgForm)
  {
    this.employeeService.registerEmployee(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getEmployees();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (resp) => {
        console.log(resp);
        this.employeeDetails = resp;
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getEmployees();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(employee: { id: string; fName: string; lName: string; dob: string; idCardNumber: string; mobileNumber: string; landline: string; secondaryContact: string; temporaryAddress: string; permanentAddress: string; }) {
    this.employeeToUpdate = employee;
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
