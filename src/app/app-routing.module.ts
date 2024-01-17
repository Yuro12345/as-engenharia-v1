import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ContatosComponent } from './components/contatos/contatos.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'contatos',
    component: ContatosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
