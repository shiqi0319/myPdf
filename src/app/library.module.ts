import { NgModule } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [],
  imports: [
    NzCollapseModule,
    NzInputModule,
    NzButtonModule,
    NzDrawerModule,
    NzRadioModule
  ],
  exports: [
    NzCollapseModule,
    NzInputModule,
    NzButtonModule,
    NzDrawerModule,
    NzRadioModule
  ]
})
export class LibraryModule { }
