import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user = {
    name : 'Raju Shinde',
    email : 'shinderaju08@gmail.com',
    test : [{
      testId : '12345',
      marks : '20',
      total : '100'
    }]
  };
  users = [
    {
      name : 'Raju Shinde',
      email : 'shinderaju08@gmail.com',
      test : [{
        testId : '12345',
        marks : '20',
        total : '100'
      }]
    },
    {
      name : 'Raju Shinde',
      email : 'shinderaju08@gmail.com',
      test : [{
        testId : '12345',
        marks : '20',
        total : '100'
      }]
    },
    {
      name : 'Raju Shinde',
      email : 'shinderaju08@gmail.com',
      test : [{
        testId : '12345',
        marks : '20',
        total : '100'
      }]
    },
    {
      name : 'Raju Shinde',
      email : 'shinderaju08@gmail.com',
      test : [{
        testId : '12345',
        marks : '20',
        total : '100'
      }]
    },
    {
      name : 'Raju Shinde',
      email : 'shinderaju08@gmail.com',
      test : [{
        testId : '12345',
        marks : '20',
        total : '100'
      }]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
