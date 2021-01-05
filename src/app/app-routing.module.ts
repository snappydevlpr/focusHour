import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TimerformComponent } from './timerform/timerform.component';

const routes: Routes = [
  {path:"", component:LoginPageComponent},
  {path:"timer-details", component:TimerformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
