import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-view-individualpatient',
  templateUrl: './view-individualpatient.component.html',
  styleUrls: ['./view-individualpatient.component.scss']
})
export class ViewIndividualpatientComponent implements OnInit {
  gender: any = ['Male', 'Female','Other']
  blood: any = ['A+', 'A-','B+','B-','AB+','AB-','O+','O-']
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] =[CountryISO.India];
  @ViewChild('htmlData') htmlData:ElementRef;
  public loginForm: FormGroup;
  submitted = false;
  public gen: string;
  public bld: string;
  constructor(
    public toastr: ToastrService,

  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
 
  get loginFormControl(){
    return this.loginForm.controls;
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
  createForm() {
    this.loginForm = this.formBuilder.group({
      'first_name':['', Validators.required],
      'last_name':['', Validators.required],
      'username':['', Validators.required],
       'mobile':[" "],
       'age':['', [Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
       'Injury':['', Validators.required],
      'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'dob': ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      'zip_code':['', [Validators.required, Validators.minLength(6)]],
      'code':['', Validators.required],
      'country':['', Validators.required],
      'gender':['', Validators.required],
      'address':['', Validators.required],
      'addnote':['', Validators.required],
  
    });
}
onSubmit() {

  // ////debugger
  this.submitted = true;
}
}
