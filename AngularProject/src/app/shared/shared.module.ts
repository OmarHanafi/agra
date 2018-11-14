import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { SecurityService } from './security.service';

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule
  ],
  providers: [SecurityService]
})
export class SharedModule { }
