import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
title = 'Projects';
  constructor() { }

  ngOnInit(): void {
  }

  projectName: string = '';
description: string = '';
qty: string = '';


}
