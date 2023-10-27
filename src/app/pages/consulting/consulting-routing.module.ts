import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultingComponent } from './consulting.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [{
  path: '',
  component: ConsultingComponent,
  children: [
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'views/:idConsulting',
      component: ViewsComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultingRoutingModule {
}
