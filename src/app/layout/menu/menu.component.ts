import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() MenuName = '';
  @Input() MenuPath: any = '';
  @Input() Submenus: any = [];
  constructor() {}

  ngOnInit(): void {}
}
