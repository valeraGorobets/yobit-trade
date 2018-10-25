import { Component, OnInit } from '@angular/core';
import { YobitApiService } from '../services/yobit-api.service';

@Component({
  selector: 'traiding-view',
  templateUrl: './traiding-view.component.html',
  styleUrls: ['./traiding-view.component.less']
})
export class TraidingViewComponent implements OnInit {
  private yobitApiService: YobitApiService;

  constructor(yobitApiService: YobitApiService) {
    this.yobitApiService = yobitApiService;
  }
  
  request(method) {
    console.log(method);
    this.yobitApiService[method]().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() { }

}
