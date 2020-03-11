import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './views/pages/users/create-user/create-user.component';
import { EditUserComponent } from './views/pages/users/edit-user/edit-user.component';
import { UsersService} from './services/users.service';
import { MainComponent } from './views/layouts/main/main.component';
import { AuthComponent } from './views/layouts/auth/auth.component';
import { ListUserComponent } from './views/pages/users/list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './views/pages/products/list-product/list-product.component';
import { CreateProductComponent } from './views/pages/products/create-product/create-product.component';
import { ListClientComponent } from './views/pages/clients/list-client/list-client.component';
import { ListFournisseurComponent } from './views/pages/fournisseurs/list-fournisseur/list-fournisseur.component';
import { CreateClientComponent } from './views/pages/clients/create-client/create-client.component';
import { CreateFournisseurComponent } from './views/pages/fournisseurs/create-fournisseur/create-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    MainComponent,
    AuthComponent,
    ListUserComponent,
    ListProductComponent,
    CreateProductComponent,
    ListClientComponent,
    ListFournisseurComponent,
    CreateClientComponent,
    CreateFournisseurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }



