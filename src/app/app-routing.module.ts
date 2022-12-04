import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvisosComponent } from './pages/avisos/avisos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PerfilPostagensComponent } from './pages/perfil-postagens/perfil-postagens.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PostarComponent } from './pages/postar/postar.component';


const routes: Routes = [
    { path: 'avisos', component: AvisosComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'postar', component: PostarComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'perfil-postagens', component: PerfilPostagensComponent },
    { path: '', redirectTo: 'avisos', pathMatch: 'full' },




];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

