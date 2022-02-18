import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { companyDB } from 'src/app/shared/data/tables/company';

@Component({
  selector: 'app-allpatient',
  templateUrl: './allpatient.component.html',
  styleUrls: ['./allpatient.component.scss']
})
export class AllpatientComponent implements OnInit {

  public company = [];
  p: number[] = [];
  item: any[];
    constructor(    private router: Router,
    ) {
    this.company = companyDB.data;
  }

  ngOnInit(): void {
  }
  popup(){
    this.router.navigateByUrl('/pages/viewpatient')

  }
  gotoadd(){
    this.router.navigateByUrl('/pages/addpatient')

  }
}
