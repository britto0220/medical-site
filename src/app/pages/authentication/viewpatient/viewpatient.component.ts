import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import {  ViewChild, ElementRef } from '@angular/core';
 
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { MatDialog } from '@angular/material/dialog';
import { UpdateaddpatientComponent } from '../updateaddpatient/updateaddpatient.component';
@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.scss']
})
export class ViewpatientComponent implements OnInit {
  // @ViewChild('pdfTable') htmlData:ElementRef;
  // @ViewChild('pdfTable') pdfTable: ElementRef;
  @ViewChild('htmlData') htmlData:ElementRef;

  public url: any;
  // pdfTable: any;
  
  // images: Image[] = [
  //   new Image(
  //     0,
  //     {
  //       img: 'assets/images/other-images/profile-style-img.png',
  //       extUrl: 'http://www.google.com'
  //     })
  // ]
  // images1: Image[] = [
  //   new Image(
  //     0,
  //     {
  //       img: 'assets/images/blog/img.png',
  //       extUrl: 'http://www.google.com'
  //     })
  // ]

  constructor(
    private router: Router,
    public dialog: MatDialog,
    ) { }

  

  //FileUpload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }


  ngOnInit(): void {
  }
  public openPDF():void {
    let DATA = document.getElementById('htmlData');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('Checkup Report.pdf');
    });  
       
    }
    popup() {
      const dialogRef = this.dialog.open(UpdateaddpatientComponent, {
        width: '700px',
        height: '500px',
        // data: { data: drawEdit, }
      });
      dialogRef.afterClosed().subscribe((result) => {
      });
    }
    
  // popup(){
  //   this.router.navigateByUrl('/pages/viewindivpatient')

  // }
  // gotopatient(){
  //   this.router.navigateByUrl('/pages/viewindivpatient')

  // }
}
