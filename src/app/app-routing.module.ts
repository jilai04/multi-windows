import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindowComponent } from './window/window.component';
import { Window2Component } from './window2/window2.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // 通用的窗口路由
  { path: 'window', component: WindowComponent }, 
  { path: 'window2', component: Window2Component }, 

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // 添加其他路由
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
