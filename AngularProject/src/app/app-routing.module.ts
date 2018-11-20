import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientHomeComponent } from './client/pages/clienthome/clienthome.component';
import { LoginComponent } from './login/login.component';
import { ClientAuthGuard } from './client/clientauth.guard';
import { LogoutComponent } from './shared/logout/logout.component';
import { ClientProductComponent } from './client/pages/clientproduct/clientproduct.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path : "login", component : LoginComponent},
  {path : "logout", component : LogoutComponent},
  {path : "client", component : ClientHomeComponent, canActivate : [ClientAuthGuard]},
  {path : "client/product/:id", component : ClientProductComponent, canActivate : [ClientAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : []
})

export class AppRoutingModule { }
