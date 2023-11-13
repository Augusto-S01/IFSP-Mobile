import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from '../models/IAppState';

import { ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import { deletarNota } from '../store/app.state';


@Component({
  selector: 'app-deletar-nota',
  templateUrl: './deletar-nota.page.html',
  styleUrls: ['./deletar-nota.page.scss'],
})
export class DeletarNotaPage implements OnInit {

  constructor(
    private store:Store<{ app : IAppState }>,
    private modalController: ModalController,
    public alertController: AlertController
    ) {
    }



  notas$ = this.store
  .select('app').pipe(
    map(e => e.notas));

  ngOnInit(): void {

  }

  async deletarNotaClicada(nota:any){


    const option = await this.presentAlert();


    if(option == 'Sim'){
      this.store.dispatch(deletarNota({payload: nota}));
    }


  }


  async presentAlert() {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: 'Deletando nota',
        message: 'Você tem certeza que deseja deletar esta nota?',
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              resolve('Sim');
            }
          },
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              resolve('Não');
            }
          }
        ]
      });

      await alert.present();
    });
  }





}
