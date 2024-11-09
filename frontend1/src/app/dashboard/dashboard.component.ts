import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userlist = 0;

  constructor(
    private UserService: UserService
  ) {}
  
  ngOnInit(): void {
    this.UserService.getUsers().subscribe(students => {
      console.log(students);
      this.userlist = students.length;
    })
  }

}
