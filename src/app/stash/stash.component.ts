import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stash',
  templateUrl: './stash.component.html',
  styleUrls: ['./stash.component.css']
})
export class StashComponent implements OnInit {
  title = 'Stash';
  constructor() { }

  handleClick(event: any): void {
alert('Stash clicked');

  }
  ngOnInit() {
  }

}

// controller
