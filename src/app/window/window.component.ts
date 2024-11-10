import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WindowManagerService } from './window-manager.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit, OnDestroy {
  @Input() windowName!: string; // 窗口的唯一名称
  windowId!: any;
  data: any = {};
  message!: string;

  constructor(private windowManager: WindowManagerService) {}

  ngOnInit() {
     // 监听父窗口发送的消息
     window.addEventListener('message', (event: MessageEvent) => {
      if (event.origin === window.location.origin) {  // 确保来源正确
        this.windowId = event.data.id;
        this.message = event.data.message;  // 接收数据并更新组件
        this.updateData({ content: this.message })
      }
    });
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
