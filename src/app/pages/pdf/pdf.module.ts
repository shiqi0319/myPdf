import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf.component';
import {PdfRoutingModule} from './pdf-routing.module';
import {LibraryModule} from '../../library.module';
import {FormsModule} from '@angular/forms';
import { PdfKeywordPipe } from './pdf-keyword.pipe';



@NgModule({
  imports: [
    PdfRoutingModule,
    CommonModule,
    LibraryModule,
    FormsModule
  ],
  declarations: [ PdfComponent, PdfKeywordPipe ],
  exports: []
})
export class PdfModule { }
