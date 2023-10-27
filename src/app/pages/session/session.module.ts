import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SessionComponent } from './session.component';
import { SessionRoutingModule } from './session-routing.module';
import { ViewsComponent } from './views/views.component';

@NgModule({
    imports: [
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        FormsRoutingModule,
        NbSelectModule,
        NbIconModule,
        ngFormsModule,
        Ng2SmartTableModule,
        SessionRoutingModule,
      ],
      declarations: [
        SessionComponent,
        SearchComponent,
        ViewsComponent,
      ],
})
export class SessionModule { }
