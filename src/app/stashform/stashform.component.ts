import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stashform',
  templateUrl: './stashform.component.html',
  styleUrls: ['./stashform.component.css'],
})
export class StashformComponent implements OnInit {
  title = 'Stash Form';
  constructor() {}

  ngOnInit() {}

  tag: string = '';
  handleInput(event: any) {
    this.tag = event.target.value
  }
}
