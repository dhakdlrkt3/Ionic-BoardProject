import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private boardList: any =[];

  constructor() {
    this.boardList.push(
      { num: 0, tag: '[동물]', title: '과자 남은 거 좀 있나', contents: '사진', date: '6-24-13:00', hit: 23},
      { num: 1, tag: '[엽기]', title: '나도 웃겨', contents: '글글글글글', date: '6-25-7:59', hit: 2},
      { num: 3, tag: '[정보]', title: '유튜브 광고 기준', contents: '동영상', date: '6-26-13:33', hit: 36},
      { num: 4, tag: '[감동]', title: '어머니가 주신...', contents: '솜사탕...', date: '6-26-12:52', hit: 85},
      { num: 5, tag: '[사회]', title: '북한 도발', contents: '북한이 삐라를 ~~ ', date: '6-27-17:16', hit: 105},
    )
  }

}
