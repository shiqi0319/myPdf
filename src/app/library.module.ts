import { NgModule } from '@angular/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [],
  imports: [
    NzCollapseModule,
    NzInputModule,
    NzButtonModule
  ],
  exports: [
    NzCollapseModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class LibraryModule { }
