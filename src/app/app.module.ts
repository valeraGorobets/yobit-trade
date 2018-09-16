import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { YobitApiService } from './services/yobit-api.service';
import { TraidingViewComponent } from './traiding-view/traiding-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TraidingViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [YobitApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
