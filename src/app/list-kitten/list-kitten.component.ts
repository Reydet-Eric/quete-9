import { Component, OnInit } from '@angular/core';
import { Lapin } from '../lapin'

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit{

item: Lapin [] = []
index: any = 0
candidat: any = []

lapinsAdoption: Lapin [] = [
  {nom: 'Pinpon',
    race: 'Trobo',
    date: new Date(2022,9,22),
    photo: "https://media.istockphoto.com/id/1359866154/fr/photo/petit-lapin-rouge-moelleux-sur-fond-vert-clair.jpg?s=612x612&w=0&k=20&c=77iuRKisyeIJMaNSKbrZbhcwkr6paPaG_XMGauJscms="
  },
  {nom: 'MangeCable',
    race: 'RongeTou',
    date: new Date(2021,12,25),
    photo: "https://www.popsci.com/uploads/2020/07/20/W2NSRFJ7ZZBT3OMTMN2ZTGREJE-768x576.jpg"
  },
]


ngOnInit(): void {
    this.item
}


deleteLapin(item:any ){
  console.log(this.lapinsAdoption);
  // this.index=this.Partage
console.log(item);


  this.lapinsAdoption = this.lapinsAdoption.filter(b => b.nom !== item.nom);
  this.lapinsAdoption.splice(this.lapinsAdoption.indexOf(item),1)
}


}
