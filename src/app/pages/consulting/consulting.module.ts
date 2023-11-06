import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbProgressBarModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ConsultingComponent } from './consulting.component';
import { RegisterComponent } from './register/register.component';
import { ConsultingRoutingModule } from './consulting-routing.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ViewsComponent } from './views/views.component';
import { ShowcaseDialogComponent } from '../../shared/showcase-dialog/showcase-dialog.component';

@NgModule({
    imports: [
        ThemeModule,
        NbTabsetModule,
        NbProgressBarModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        FormsRoutingModule,
        NbSelectModule,
        NbIconModule,
        ngFormsModule,
        NbSpinnerModule,
        Ng2SmartTableModule,
        ConsultingRoutingModule,
      ],
      declarations: [
        ConsultingComponent,
        RegisterComponent,
        SearchComponent,
        ViewsComponent,
        ShowcaseDialogComponent
      ],
})
export class ConsultingModule { }
