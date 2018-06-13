import {Component, OnInit} from '@angular/core';
import {VulnApiService} from "../services/vuln-api.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-clair-select-report',
  templateUrl: './clair-select-report.component.html',
  styleUrls: ['./clair-select-report.component.css']
})
export class ClairSelectReportComponent implements OnInit {

  clairObjects: any;

  constructor(private http: HttpClient, private apiService: VulnApiService) {
    this.apiService.addTest().subscribe(() => {
    });
  }

  ngOnInit() {
    this.apiService.getClair("xebia", "vulnmanager").subscribe((data) => {
      // data bestaat
      console.log(data);
      this.clairObjects = data;
    });
  }

}
