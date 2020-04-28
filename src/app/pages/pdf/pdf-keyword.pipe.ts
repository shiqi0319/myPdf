import {Pipe, Injectable, PipeTransform} from '@angular/core';
import {  DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'pdfKeyword'
})

@Injectable()
export class PdfKeywordPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}
  transform(val: string, keyword: string): any {
    let Reg = new RegExp(keyword, 'i');
    if (val) {
      let res = val.replace( Reg,`<span style="color: #ff2424;">${keyword}</span>`);
      console.log(res)
      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }
}