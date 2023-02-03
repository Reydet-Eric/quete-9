import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
// import { PartageService } from '../partage.service';


@Component({
  selector: 'app-affich-kitten',
  templateUrl: './affich-kitten.component.html',
  styleUrls: ['./affich-kitten.component.css']
})
export class AffichKittenComponent implements OnInit{

@Input() item: any;
@Input() lapinsAdoption: any;
@Output() copyEmitter = new EventEmitter()
@Output() deleteEmitter = new EventEmitter()

ngOnInit(): void {
console.log(this.item.photo);

}

adopteLapin(){

console.log(this.item);

  this.copyEmitter.emit(this.item);
}
}
