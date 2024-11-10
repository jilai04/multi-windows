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

  // 更新窗口数据
  updateWindowData(windowName: string) {
    const updatedData = { message: 'Updated data', id: '001'}; // 这里是要发送的更新数据
    this.windowManager.updateWindowData(windowName, updatedData);
  }  
}
