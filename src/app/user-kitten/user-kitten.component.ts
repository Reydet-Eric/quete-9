import { Component, Input, OnInit } from '@angular/core';
import { Lapin } from '../lapin';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit{


  @Input() mesLapins:any
@Input() nouveauLapin: any = []
lapins:any=[]
ngOnInit(): void {
this.lapins=this.mesLapins
}

}
