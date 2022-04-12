import { Component} from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition('* => expand', [
        query('.collapse', style({ opacity: 0 }), { optional: true }),
        query('.collapse', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0 }),
            style({ opacity: .5 }),
            style({ opacity: 1 }),
          ]))
        ]
        ), { optional: true }),
        query('li', style({ opacity: 0 }), { optional: true }),
        query('li', stagger('200ms', [
          animate('0.5s ease-in', keyframes([
            style({ opacity: 0 }),
            style({ opacity: .5 }),
            style({ opacity: 1 }),
          ]))
        ]
        ), { optional: true }),
      ]),
      transition('* => collapse', [
        query('.collapse', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1 }),
            style({ opacity: .5 }),
            style({ opacity: 0 }),
          ]))
        ]
        ), { optional: true }),
        query('li', stagger('200ms', [
          animate('0.5s ease-in', keyframes([
            style({ opacity: 1 }),
            style({ opacity: .5 }),
            style({ opacity: 0 }),
          ]))
        ]
        ), { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'animation';
  isCollapsed = true;
  listAnimate = '';
  
  constructor() { }

  ngOnInit() { }

  onToggle() {
    this.isCollapsed = !this.isCollapsed;
    this.listAnimate = this.isCollapsed ? 'collapse' : 'expand'
  }

}
