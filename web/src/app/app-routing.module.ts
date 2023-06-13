import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RestaurantsComponent } from './pages/private/restaurants/restaurants.component';
import { PlatosComponent } from './pages/private/platos/platos.component';
import { RestaurantformComponent } from './pages/private/restaurantform/restaurantform.component';
import { CategoriasComponent } from './pages/private/categorias/categorias.component';
import { PlatoformComponent } from './pages/private/platoform/platoform.component';
import { VentasComponent } from './pages/private/ventas/ventas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'restaurantes', component: RestaurantsComponent},
  { path: 'platos', component: PlatosComponent},
  { path: 'platos/:idRestaurante', component: PlatosComponent},
  { path: 'restaurantform', component: RestaurantformComponent},
  { path: 'restaurantform/:id', component: RestaurantformComponent},
  { path: 'categorias/:id', component: CategoriasComponent},
  { path: 'platoform/:id', component: PlatoformComponent},
  { path: 'platoform/:id/:idPlato', component: PlatoformComponent},
  { path: 'ventas', component: VentasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
