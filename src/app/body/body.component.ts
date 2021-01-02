import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  SeeMore = true;
  visible = false;


  // tslint:disable-next-line:typedef
  onclick(){
    this.SeeMore = !this.SeeMore;
    this.visible = !this.visible;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
