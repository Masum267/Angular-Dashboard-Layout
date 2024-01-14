import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  Menus = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      submenus: [],
    },
    {
      name: 'Services',
      path: '/services',
      submenus: [],
    },
    {
      name: 'User',
      submenus: [
        {
          name: 'Create user',
        },
        {
          name: 'List User',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
