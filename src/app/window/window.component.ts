import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WindowManagerService } from './window-manager.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit, OnDestroy {
  @Input() windowName!: string; // 窗口的唯一名称
  data: any = {}; // 窗口的状态数据

  constructor(private windowManager: WindowManagerService) {}

  ngOnInit() {
    // 恢复窗口状态
    const savedState = this.windowManager.restoreWindowState(this.windowName);
    if (savedState) {
      this.data = savedState;
    }
  }

  // 更新窗口数据
  updateData(newData: any) {
    this.data = { ...this.data, ...newData };
  }

  ngOnDestroy() {
    // 关闭之前保存状态
    this.windowManager.saveWindowState(this.windowName, this.data);
  }

  openNewWindow(windowName: string) {

    this.windowManager.openWindow(windowName, windowName);
  }
}
