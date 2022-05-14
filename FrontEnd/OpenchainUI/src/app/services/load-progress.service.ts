import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadProgressService {
  private data = new BehaviorSubject<boolean>(false)
  isVisible = this.data.asObservable()
  constructor() { }
  visible():void{
    this.data.next(true);
  }
  hidden():void{
    this.data.next(false);
  }
}
