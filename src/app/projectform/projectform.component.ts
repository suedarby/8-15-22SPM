import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent implements OnInit {
title = 'Project';
  constructor() { }

  ngOnInit() {
  }
// projectForm DB
  projectName: string = '';
  projectDescription: string = '';
  qty: string = '';
  location: string = '';
  status: string = '';
  category: string = '';
  budget: string = '';
  tags: string = '';
  item: string = '';
  supplyItem: string = '';
  supplyDescription: string = '';
  image: string = '';
  notStarted: boolean = false;
  inProgress: boolean = false;
  missingSupplies: boolean = false;
  ufo: boolean = false;
  completed: boolean = false;
}
