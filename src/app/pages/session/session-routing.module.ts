import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SessionComponent } from './session.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [{
  path: '',
  component: SessionComponent,
  children: [
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'views/:idConsulting/:idSession',
      component: ViewsComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {
}
