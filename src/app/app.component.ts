import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from "./store";
import { INCREMENT } from "./actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      let store = ngRedux.getState();
      this.counter = store.counter;
    });
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({
      type: INCREMENT
    });
  }
}
