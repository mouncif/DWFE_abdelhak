import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './views/components/footer/footer.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { CreateUserComponent } from './views/pages/users/create-user/create-user.component';
import { EditUserComponent } from './views/pages/users/edit-user/edit-user.component';
import { UsersService} from './services/users.service';
import { MainComponent } from './views/layouts/main/main.component';
import { AuthComponent } from './views/layouts/auth/auth.component';
import { ListUserComponent } from './views/pages/users/list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CreateUserComponent,
    EditUserComponent,
    MainComponent,
    AuthComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }



