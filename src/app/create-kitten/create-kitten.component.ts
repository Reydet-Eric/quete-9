import { Component,EventEmitter, Output, Input } from '@angular/core';
import { Lapin } from '../lapin';
import { FormsModule } from '@angular/forms';
// import { PartageService } from '../partage.service'

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
pinpin: Lapin = new Lapin ("","",new Date(),"")
  @Output() addAdoptionEmitter = new EventEmitter()
  @Input() lapinsAdoption: any;
  @Input() item: any
nouveauLapinou: Lapin [] = []


formOk: boolean = false


// constructor (public Partage: PartageService) {}

onSubmit():void{
  let lapin: Lapin = new Lapin ("","",new Date(),"")
    console.log("enregistrement en cours ...")
  lapin=this.pinpin
  console.log(lapin)
  this.lapinsAdoption.push(lapin)
 
 }

}
