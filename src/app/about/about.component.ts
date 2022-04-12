import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate(900)]),
      transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),
  ]
   
 
})
export class AboutComponent implements OnInit {
  isShowing = true;
  constructor() { }


  ngOnInit(): void {
  }

}
