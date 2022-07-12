import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1 : string[] = ["John Depp", 'Cascade Street 25']
  info2 : string[] = ["Marta Depp", 'Cascade Street 20']
  info3 : string[] = ["Timothy Depp", 'Cascade Street 15']

  getInfo1(): string[] {
    return this.info1
  }
  getInfo2(): string[] {
    return this.info2
  }
  getInfo3(): string[] {
    return this.info3
  }

  constructor() { }
}
