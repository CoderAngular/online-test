import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {_id:1, text: 'html', cols: 1, rows: 1, color: 'lightblue', img_src: 'assets/images/html5.png'},
    {_id:2, text: 'css', cols: 1, rows: 1, color: 'lightblue', img_src: 'assets/images/css3.png'},
    {_id:3, text: 'javascript', cols: 1, rows: 1, color: 'lightblue', img_src: 'assets/images/js.png'},
    {_id:4, text: 'angular', cols: 1, rows: 1, color: 'lightblue', img_src: 'assets/images/angular.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
