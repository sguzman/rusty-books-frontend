import { Component } from '@angular/core';
import {HttpProvider} from "../../providers/http/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider]
})
export class HomePage {
  public page_idx: number = 0;
  public page_size: number = 10;

  public items: any[] = [];

  constructor(public http: HttpProvider) {
    this.http.get(this.page_idx, this.page_size, data => {
      console.log(data);
    })
  }

}
