import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  // 侧边栏展开
  isCollapsed = false;
  // 全屏模式
  isFullScreen = false;
  // 右侧栏
  rightTrigger = false;

  // 菜单只展开一项
  openMap = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  // 菜单模式
  mode = false;
  dark = false;

  openHandler( value: string ): void {
    for ( const key in this.openMap ) {
      if ( key !== value ) {
        this.openMap[ key ] = false;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  nzCollapsedChange( e ): void {
    console.log(e);
  }

  F11() {
    if ( !this.isFullScreen ) {
      this.requestFullScreen();
      this.isFullScreen = true;
    } else {
      this.exitFullscreen();
      this.isFullScreen = false;
    }
  }

  // 进入全屏
  requestFullScreen(): void {
    const de = document.documentElement;
    if ( de.requestFullscreen ) {
      de.requestFullscreen();
    } else if ( de.webkitRequestFullScreen ) {
      de.webkitRequestFullScreen();
    }
  }

  // 退出全屏
  exitFullscreen(): void {
    const de = document;
    if ( de.exitFullscreen ) {
      de.exitFullscreen();
    } else if ( de.webkitCancelFullScreen ) {
      de.webkitCancelFullScreen();
    }
  }

  openRightTriggerOption(): void {
    this.rightTrigger = true;
  }

  closeRightTriggerOption(): void {
    this.rightTrigger = false;
  }
}
