import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: '주차 현황', url: '/home', icon: 'home' },
    { title: '예약 확인', url: '/register', icon: 'person-add' },
    { title: '', url: '/login', icon: 'enter' },
    { title: '계정 수정', url: '/dashboard', icon: 'card' },
    { title: '앱 정보', url: '/profile', icon: 'body' },
    { title: '계정 찾기', url: '/forgot-id', icon: 'body' }
 ];
  constructor() {}
}
