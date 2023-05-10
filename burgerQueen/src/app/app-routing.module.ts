import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { CrearPedidoComponent } from './views/crear-pedido/crear-pedido.component';

const routes: Routes = [
  { path: 'pedidos', component: PedidosComponent },
  { path: 'inicio-de-sesion', component: LoginComponent},
  { path: '', redirectTo: 'crear-pedido', pathMatch: 'full' },
  { path: 'crear-pedido', component: CrearPedidoComponent},
  // { path: 'users', component: PoliticaPrivacidadComponent},
  // { path: 'privacy-policy', component: PoliticaPrivacidadComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
