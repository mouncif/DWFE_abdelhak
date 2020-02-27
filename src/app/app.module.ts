import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './views/components/footer/footer.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { CreateUserComponent } from './views/pages/users/create-user/create-user.component';
import { ShowUserComponent } from './views/pages/users/show-user/show-user.component';
import { EditUserComponent } from './views/pages/users/edit-user/edit-user.component';
import { UsersService} from './services/users.service';
import { MainComponent } from './views/layouts/main/main.component';
import { AuthComponent } from './views/layouts/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CreateUserComponent,
    ShowUserComponent,
    EditUserComponent,
    MainComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }



