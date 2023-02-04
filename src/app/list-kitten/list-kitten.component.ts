import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lapin } from '../lapin'

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  @Input() lapinsAdoption: any
  @Output() lapinPourAdoptionUserEmitter = new EventEmitter()
  item: Lapin[] = []


  ngOnInit(): void {
    this.item
  }
  adopteLapin(index: number) {
this.lapinPourAdoptionUserEmitter.emit(index)
  }

  deleteLapin(item: any) {
    console.log(this.lapinsAdoption);
    console.log(item);
    this.lapinsAdoption.splice(this.lapinsAdoption.indexOf(item), 1)
  }


}
