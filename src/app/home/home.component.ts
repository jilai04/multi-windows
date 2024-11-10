import { Component } from '@angular/core';
import { WindowManagerService } from '../window/window-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private windowManager: WindowManagerService) {}

  openNewWindow(windowName: string) {

    this.windowManager.openWindow(windowName, windowName);
  }
}
