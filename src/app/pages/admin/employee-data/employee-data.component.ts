import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css'],
})
export class EmployeeDataComponent {
  employeeData: Employee[] = EMP_DATA;
  selectedEmployees: Employee | undefined;
  @ViewChild('dt1') dt1: Table | undefined;

  applyFilterGlobal(event: Event, stringVal: any) {
    this.dt1!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }
}

const EMP_DATA: Employee[] = [
  {
    nip: '653219487',
    name: 'Betty Doe',
    email: 'email@gmail.com',
    division: 'IT',
    level: 1,
  },
  {
    nip: '980763241',
    name: 'Ann Marrie',
    email: 'ann.marie@gmail.com',
    division: 'IT',
    level: 3,
  },
  {
    nip: '712508693',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    division: 'IT',
    level: 2,
  },
  {
    nip: '864295037',
    name: 'Betty Doe',
    email: 'email@gmail.com',
    division: 'IT',
    level: 2,
  },
  {
    nip: '246910385',
    name: 'Betty Doe',
    email: 'email@gmail.com',
    division: 'IT',
    level: 1,
  },
];
