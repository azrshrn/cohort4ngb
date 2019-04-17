import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './appshell.component.html',
  styleUrls: ['./appshell.component.scss']
})



export class AppshellComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() {
  }
}

