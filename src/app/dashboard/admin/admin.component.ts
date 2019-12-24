import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../shared/services/servercall.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user = {
    name : 'Raju Shinde',
    email : 'shinderaju08@gmail.com',
    userTest : [{
      testId : '12345',
      obtainedMarks : '20',
      totalMarks : '100'
    }]
  };
  users;
  constructor(private servercallService: ServercallService) { }

  ngOnInit() {
    this.getAllCanditates();
  }
  getAllCanditates() {
    this.servercallService.getAllCanditates().subscribe((allCandidates) => {
this.users = allCandidates;
    });
  }


}
