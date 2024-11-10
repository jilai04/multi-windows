import { Component } from '@angular/core';
import { WindowManagerService } from './window/window-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private windowManager: WindowManagerService) {}


}
