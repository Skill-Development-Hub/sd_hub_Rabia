import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userlist = 0;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(){}

}
