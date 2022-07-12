import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service-tutorial',
  templateUrl: './service-tutorial.component.html',
  styleUrls: ['./service-tutorial.component.sass'],
  providers: [DataService]
})
export class ServiceTutorialComponent implements OnInit {

  infoReceived1 : string[] = [];
  infoReceived2 : string[] = [];
  infoReceived3 : string[] = [];

  getInfoFromService1() {
    this.infoReceived1
  }
  getInfoFromService2() {}
  getInfoFromService3() {}

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
    // test test test
  }

}
