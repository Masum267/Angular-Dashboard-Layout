import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ServicesComponent],
  imports: [BrowserModule, LayoutModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
