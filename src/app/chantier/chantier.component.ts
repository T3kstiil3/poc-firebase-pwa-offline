import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-chantier',
  templateUrl: './chantier.component.html',
  styleUrls: ['./chantier.component.scss'],
})
export class ChantierComponent implements OnInit {

  chantier: any;
  name: string;
  id: any;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public toastController: ToastController) {
    this.route.params.subscribe(params => {
      this.id = params['idchantier'];
    });
  }
  
  ngOnInit() {
    this.getChantier(this.id);
  }

  getChantier(id:any) {
    this.firestore.doc(`ISIGE/${id}`)
      .valueChanges()
      .subscribe(chantier => {
        console.log(`ISIGE/${id}`);
        console.log(chantier);
        this.chantier = chantier;
      })
  }

  edit() {
    if(!this.name) {
      return;
    }else {
      
      this.firestore.doc(`ISIGE/${this.id}`).update({
        name: this.name,
      }).then(() => {
        this.name = '';
        this.toastController.create({
          message: 'Mise à jour du chantier',
          duration: 2000
        }).then(toast => {
          toast.present();
        })
        
      })
    }
  }
}
