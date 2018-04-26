import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cont: number;
  coments: boolean = false;
  commentsUsers = [
    { usuario: 'carlos', comentario: 'Lorem ipsum dolor sit amet consectetur, adipisicing' },
    { usuario: 'juan', comentario: 'Lorem ipsum dolor sit amet consectetur, adipisicing' }, 
    { usuario: 'andres', comentario: 'Lorem ipsum dolor sit amet consectetur, adipisicing' },
    { usuario: 'alvaro', comentario: 'Lorem ipsum dolor sit amet consectetur, adipisicing' }
  
  
  
  ];
  constructor(public navCtrl: NavController) {
    this.cont = 0;
  }
  //añade comentarios
  addComment(input: HTMLInputElement)
  {
    this.commentsUsers.push({usuario: 'cale',comentario: input.value})
    input.value = '';
  }
  // showAlert() {
  //   let alert = this.alertCtrl.create({
  //     title: 'New Friend!',
  //     subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

}
