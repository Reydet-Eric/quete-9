import { Component } from '@angular/core';
import { Lapin } from './lapin'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Histoires de Lapins';

  item: Lapin[] = []
  lapinPourAdoptionUser: any
  lapinsAdoption: Lapin[] = [
    {
      nom: 'Pinpon',
      race: 'Trobo',
      date: new Date(2022, 9, 22),
      photo: "https://media.istockphoto.com/id/1359866154/fr/photo/petit-lapin-rouge-moelleux-sur-fond-vert-clair.jpg?s=612x612&w=0&k=20&c=77iuRKisyeIJMaNSKbrZbhcwkr6paPaG_XMGauJscms="
    },
    {
      nom: 'MangeCable',
      race: 'RongeTou',
      date: new Date(2021, 12, 25),
      photo: "https://www.popsci.com/uploads/2020/07/20/W2NSRFJ7ZZBT3OMTMN2ZTGREJE-768x576.jpg"
    },
  ]
  mesLapins: Lapin[] = [
    {
      nom: 'Choupette',
      race: 'nain, il parait....',
      date: new Date(2020, 12, 25),
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/JumpingRabbit.JPG/291px-JumpingRabbit.JPG"
    }
  ]

  ngOnInit(): void {  }

  adopteLapinDansListeAdoption(event: any) {

    this.mesLapins.push(this.lapinsAdoption[event])

    this.lapinsAdoption.splice(event, 1)
    console.log(this.mesLapins);
    console.log(this.lapinsAdoption);


  }
adopteLapinFormulaire(event: Lapin){
  console.log(event);

this.lapinsAdoption.push(event)
}


}
