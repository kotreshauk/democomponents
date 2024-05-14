import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ['Adam Rose', 'Emp0001', 'Adam@net.com']
  info2: string[] = ['Brian Rose', 'Emp0002', 'Brian@net.com']
  info3: string[] = ['Charle Rose', 'Emp0003', 'Charle@net.com']
  
  getinfo1(): string[] {
    return this.info1
  }
  getinfo2(): string[] {
    return this.info2
  }

  getinfo3(): string[] {
    return this.info3
  }
  constructor() { }
}

  
  