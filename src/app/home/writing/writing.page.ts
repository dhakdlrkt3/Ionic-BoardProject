import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home.page';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.page.html',
  styleUrls: ['./writing.page.scss'],
})
export class WritingPage implements OnInit {
  static num: number;
  tag: string;
  title: string;
  contents: string;
  date: string;
  hit: number;
  
  
  constructor(private BoardList: HomePage, ) { 
    WritingPage.num = 5;  
  }
  ngOnInit() {
  }

  submit(){
    let data: any = [];
    data.push(WritingPage.num++);
    data.push(this.title);
    data.push(this.contents);

    console.log(data);
    this.BoardList.addBoardList(data);
    
  }
}