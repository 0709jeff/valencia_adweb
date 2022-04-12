import { Component, OnInit , HostBinding } from '@angular/core';
import { trigger, state, animate, transition, style} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    //animation trigger go here
    trigger('openClose', [
      state('open', style({
        height: '1100px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed',[
        animate('2s ease-out')
      ]),
      transition('closed => open',[
        animate('0.5s')
      ]),
    ]),
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  toogle()  {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
