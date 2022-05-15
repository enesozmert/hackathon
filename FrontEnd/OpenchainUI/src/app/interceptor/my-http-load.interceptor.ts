import { LoadProgressService } from './../services/load-progress.service';
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class MyHttpLoadInterceptor implements HttpInterceptor {


  count: number = 0;

  constructor(private loadProgressService: LoadProgressService,
    private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadProgressService.visible();
    this.spinner.show();
    //console.log("show");
    this.count++;
    return next.handle(req)
      .pipe(tap(
        //event => //console.log(event),
        //error => //console.log(error)
      ), finalize(() => {
        this.loadProgressService.hidden();
        this.loadProgressService.visible();
        this.count--;
        if (this.count == 0){
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 50);
          //console.log("hide");
        }
      })
      );
  }
}
