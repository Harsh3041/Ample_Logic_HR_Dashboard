import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {trigger, transition,style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
//This is the main dahsboard component which contains the metrics, employee list, and recruitment chart.
export class DashboardComponent {

// This is the search term for searching employees.
   searchTerm = '';

  // sample data for Total Employees, Departments, and Recruits
  cardData = [
  { title: 'Total Employees', value: 60, icon: 'people' },
  { title: 'Total Departments', value: 6, icon: 'apartment' },
  { title: 'Total Recruits', value: 12, icon: 'person_add' }
];

  // Sample data for employee list
  employees = Array.from({ length: 58 }).map((_, i) => ({
    name: `Employee ${i + 1}`,
    department: ['Engineering', 'HR', 'Marketing', 'Finance'][i % 4]
  }));

  // This pagedEmployees conatains the employees to be displayed on the page. Whatever the page size is set to, it will display that many employees and slice is used to limit the number of employees displayed on the page.
  pagedEmployees = this.employees.slice(0, 5);
  pageSize = 5;

  // Method responsible for handling pagination
  PaginationAcc(event: PageEvent) {
    const start = event.pageIndex * event.pageSize;
    const end = start + event.pageSize;
    this.pagedEmployees = this.employees.slice(start, end);
  }

  // This is the recruitment chart data for charts ngchartsmodule is used to display the chart.
  recruitmentMonths = ['Jan', 'Feb', 'Mar', 'Apr'];
  recruitmentData = [
    { data: [3, 5, 2, 4], label: 'Recruits' }
  ];

  // This is used to set the chart options for the recruitment chart.
  chartOptions = {
    responsive: true
  };

  // This is the filteredEmployees which will be used to filter the employees based on the search term and display them on the page.
filteredEmployees = this.employees;


// Method to handle search functionality
filterEmployees() {
  const term = this.searchTerm.toLowerCase();
  this.filteredEmployees = this.employees.filter(emp =>
    emp.name.toLowerCase().includes(term) ||
    emp.department.toLowerCase().includes(term)
  );
  this.pagedEmployees = this.filteredEmployees.slice(0, this.pageSize);
}
}
