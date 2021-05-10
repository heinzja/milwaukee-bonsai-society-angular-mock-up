import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { TheLatestComponent } from './content/the-latest/the-latest.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'the-latest', component: TheLatestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: TheLatestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
