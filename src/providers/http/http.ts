import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  public get(base: number, count: number, f: any): void {
    this.http.get(`http://rusty-books.herokuapp.com/${base}/${count}`)
      .subscribe((data: any) => {
        f(data);
      })
  }
}
