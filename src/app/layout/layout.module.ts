import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRouterModule } from '../app-router/app-router.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AppLayoutComponent, SidebarComponent, MenuComponent],
  imports: [CommonModule, AppRouterModule],
  exports: [AppLayoutComponent],
})
export class LayoutModule {}
