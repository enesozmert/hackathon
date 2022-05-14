import { TestBed } from '@angular/core/testing';

import { MyHttpLoadInterceptor } from './my-http-load.interceptor';

describe('MyHttpLoadInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyHttpLoadInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyHttpLoadInterceptor = TestBed.inject(MyHttpLoadInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
