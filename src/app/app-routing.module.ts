import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolver, HomeRoutingModule } from './nodes/home/home-routing.module';
import { HomeComponent } from './nodes/home/home.component';
// import { WorkdataRoutingModule } from './nodes/workdata/workdata-routing.module';


const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
    resolve: { 
      records:HomeResolver,
    }
  },
    //the empty path --> home component
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
    //this path --> the home component
  {
    path: '**', 
    redirectTo: '/home', 
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes,{ enableTracing: false }),
  ],
  providers:    [
    HomeResolver
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
