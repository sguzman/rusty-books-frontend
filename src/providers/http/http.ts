import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  public get_observe(base: number, count: number) {
    return this.http.get(`http://rusty-books.herokuapp.com/${base}/${count}`);
  }

  public get(base: number, count: number, f: any): void {
    this.get_observe(base, count)
      .subscribe((data: any) => {
        f(data);
      })
  }
}
