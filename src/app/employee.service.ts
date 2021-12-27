import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  
  public registerEmployee(employeeData: any)
  {
    return this.http.post(this.api + '/registerEmployee', employeeData);
  }

  public getEmployees() {
    return this.http.get(this.api + '/getEmployees');
  }

  public deleteEmployee(id: string) {
    return this.http.delete(this.api + '/deleteEmployee?id=' + id);
  }

  public updateEmployee(employee: any) {
    return this.http.put(this.api + '/updateEmployee', employee);
  }
}