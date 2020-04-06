import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-components',
  templateUrl: './shared-components.component.html',
  styleUrls: ['./shared-components.component.scss']
})
export class SharedComponentsComponent implements OnInit {

  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
