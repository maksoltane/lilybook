import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../core/data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getCollection(route.params['id'], 100).map(book => {
      if (book) {
        return book;
      } else {
        console.log('book not found, redirecting...');
        this.router.navigate(['']);
        return false;
      }
    }).first();
  }

}
