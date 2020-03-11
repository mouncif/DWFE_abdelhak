import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './views/pages/users/list-user/list-user.component';
import { CreateUserComponent } from './views/pages/users/create-user/create-user.component';
import { ListProductComponent } from './views/pages/products/list-product/list-product.component';
import { CreateProductComponent } from './views/pages/products/create-product/create-product.component';
import { ListClientComponent } from './views/pages/clients/list-client/list-client.component';
import { CreateClientComponent } from './views/pages/clients/create-client/create-client.component';
import { ListFournisseurComponent } from './views/pages/fournisseurs/list-fournisseur/list-fournisseur.component';
import { CreateFournisseurComponent } from './views/pages/fournisseurs/create-fournisseur/create-fournisseur.component';


const routes: Routes = [
  {path: '', component: ListUserComponent},
  {path:'adduser', component:CreateUserComponent},
  {path:'listUsers', component:ListUserComponent},
  {path:'',component: ListProductComponent},
  {path:'addproduct', component:CreateProductComponent},
  {path:'listProducts', component:ListProductComponent},
  {path:'',component: ListClientComponent},
  {path:'addclient', component:CreateClientComponent},
  {path:'listClients', component:ListClientComponent},
  {path:'',component: ListFournisseurComponent},
  {path:'addfournisseur', component:CreateFournisseurComponent},
  {path:'listFournisseurs', component:ListFournisseurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
