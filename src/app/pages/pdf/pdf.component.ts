import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.less']
})
export class PdfComponent implements OnInit {
  keywordValue;
  addPdfList: Array<any> = [];
  pdfList: Array<any> = [];
  pdfSearchResult: Array<any> = [];
  radioValue;
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];

  visible = false;  //  默认滑框关闭

  open(): void {  //  打开滑框
    this.visible = true;
  }

  close(): void { //  关闭滑框
    this.visible = false;
  }
  add(item) { //  添加pdf到iframe
    this.addPdfList.forEach(data => data.isShow = false);
    item.isShow = true;
    this.addPdfList.push({...item});
    this.radioValue = item.id;
  }
  searchPdfKeyword() {
    const iframeArr = Array.from(document.querySelectorAll('iframe'));
    const result = [];
    iframeArr.forEach((item: any, index: number) => {
      const findBar = item.contentWindow.PDFViewerApplication.findBar;
      findBar.open();
      findBar.findField.value = this.keywordValue;
      findBar.highlightAll.checked = true;
      findBar.dispatchEvent('');
    });
    setTimeout(() => {
      iframeArr.forEach((item: any, index: number) => {
        const findController = item.contentWindow.PDFViewerApplication.findController;
        const pageContents = findController._pageContents;
        const pageMatches = findController.pageMatches;
        const query = this.keywordValue;
        const mapMatch = pageMatches.map((mapItem, mapIndex) => {
          if (mapItem.length > 0) {
            const arr = [];
            mapItem.forEach((ele) => {
              const str = pageContents[mapIndex].substring(ele - 10, ele + 10 + query.length);
              arr.push({
                idx: ele,
                data: str
              });
            })
            return arr;
          }
        })
        result.push({
          pageName: this.addPdfList[index].name,
          matchesCountTotal: findController._matchesCountTotal,
          matches: mapMatch,
          pageIndex: index,
          active: false
        })
      });
    }, 1000 * (this.addPdfList.length || 1));
    this.pdfSearchResult = result;
    console.log(this.pdfSearchResult);
  }
  selectPdf(item) {   // 选择打开pdf
    this.addPdfList.forEach(data => data.isShow = false);
    item.isShow = true;
  }
  openPdfPageIndex(index, pageIdx) {
    this.addPdfList.forEach(data => data.isShow = false);
    this.addPdfList[index].isShow = true;
    this.addPdfList[index].pageIndex = pageIdx + 1;
  }

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.pdfList = [
      {
        name: 'pdf1',
        url: '../../../assets/js/web/compressed.tracemonkey-pldi-09.pdf',
        pageIndex: 1,
        id: '1'
      },
      {
        name: 'pdf2',
        url: '../../../assets/js/web/compressed.tracemonkey-pldi-09.pdf',
        pageIndex: 2,
        id: '2'
      }
    ]
  }

}
