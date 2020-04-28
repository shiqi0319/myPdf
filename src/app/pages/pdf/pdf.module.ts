import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf.component';
import {PdfRoutingModule} from './pdf-routing.module';
import {LibraryModule} from '../../library.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    PdfRoutingModule,
    CommonModule,
    LibraryModule,
    FormsModule
  ],
  declarations: [ PdfComponent ],
  exports: []
})
export class PdfModule { }
