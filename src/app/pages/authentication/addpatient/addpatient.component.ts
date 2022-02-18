import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent implements OnInit {
  gender: any = ['Male', 'Female','Other']
  blood: any = ['A+', 'A-','B+','B-','AB+','AB-','O+','O-']
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] =[CountryISO.India];
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
