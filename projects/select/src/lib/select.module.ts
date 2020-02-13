import { NbSelectModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Module parts
import { SELECT_LITERALS, ISelectLiterals } from './select.model';
import { SelectComponent } from './component/select.component';
import { defaultLiterals } from './default.literals';

@NgModule({
  imports: [
    CommonModule,
    NbSelectModule
  ],
  providers: [
    {
      provide: SELECT_LITERALS,
      useValue: new BehaviorSubject<ISelectLiterals>(defaultLiterals)
    }
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule {}
