import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TrackPageComponent } from './views/track-page/track-page.component';
import { HomeComponent } from './views/home/home.component';


const appRoutes: Routes = [
  {path:"",component:HomeComponent},
  {path:'track/:id',component:TrackPageComponent}
]




@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouter {}