import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  @ViewChild('chipsDragList', {read: DragScrollComponent}) chipsDragList!:DragScrollComponent ;

  constructor() { }

  ngOnInit(): void {
  }

  moveChipsLeft() {
    this.chipsDragList.moveLeft();
    console.log("Izquierdo");
  
  }

  moveChipsRight() {
    this.chipsDragList.moveRight();
    console.log("Derecho");
  }

  moveChipsTo(index : any) {
    this.chipsDragList.moveTo(index);
  }

  
  
}
