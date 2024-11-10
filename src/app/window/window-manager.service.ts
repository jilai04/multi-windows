import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowManagerService {
  private windows: { [name: string]: Window | null } = {};

  // 打开一个新的唯一窗口或聚焦已有的窗口
  openWindow(url: string, name: string) {
    if (this.windows[name] && !this.windows[name]?.closed) {
      // 如果窗口已存在且未关闭，则聚焦
      this.windows[name]?.focus();
    } else {
      // 如果窗口不存在或已关闭，则打开一个新窗口
      const newWindow = window.open(url, name, 'width=800,height=600');
      this.windows[name] = newWindow;

      // 监听窗口关闭事件
      newWindow?.addEventListener('beforeunload', () => {
        delete this.windows[name];
      });
    }
  }

  // 关闭指定窗口
  closeWindow(name: string) {
    if (this.windows[name]) {
      this.windows[name]?.close();
      delete this.windows[name];
    }
  }

  // 保存窗口状态到 localStorage，使用窗口名称作为 key
  saveWindowState(name: string, state: any) {
    localStorage.setItem(name, JSON.stringify(state));
  }

  // 从 localStorage 恢复窗口状态
  restoreWindowState(name: string): any {
    const state = localStorage.getItem(name);
    return state ? JSON.parse(state) : null;
  }
}
