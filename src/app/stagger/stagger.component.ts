import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ]),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
// class ListComponent {
//   items = [];

//   showItems() {
//     this.items = [0,1,2,3,4];
//   }

//   hideItems() {
//     this.items = [];
//   }

//   toggle() {
//     this.items.length ? this.hideItems() : this.showItems();
//    }
//  }
 
export class StaggerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
