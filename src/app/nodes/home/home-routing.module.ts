import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { catchError, forkJoin, map, Observable } from 'rxjs';
import { DataService } from './../../shared/services/data.service';
import { HomeComponent } from './home.component';

@Injectable()
export class HomeResolver implements Resolve<any> { 
  constructor(private api: DataService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log('| Crossref Api connected |')
    return forkJoin (
      [this.api.getWorks()]
    ).pipe(
      map(data => {
        return {
          records: data
        };
      }),
      catchError(err => {
        return observableThrowError(err);
      })
    );
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([
    {
    path: 'home',
    component: HomeComponent,
    resolve: { records:HomeResolver }
    }
    ])
  ],
  exports: [RouterModule],
  providers: [
    HomeResolver    
  ]
})

export class HomeRoutingModule { }

function observableThrowError(err: any): any {
  throw new Error('Function not implemented.');
}
