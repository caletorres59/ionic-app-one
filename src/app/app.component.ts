import { PowerPage } from '../pages/power/power';
import { HomePage } from '../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform, IonicPage,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { FriendsPage } from '../pages/friends/friends'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: NavController; 
  rootPage:any = TabsPage;
  
  //Creo lista con todos los elementos
  public pages: Array<{titulo: string, component: any, icon: string}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = HomePage;
    this.pages = [
      { titulo: 'home', component: TabsPage, icon: 'home' },
      { titulo: 'friends', component: FriendsPage, icon: 'persons' },
      {titulo: 'power', component:PowerPage, icon: 'power-outline'}]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  showPage(pageP)
  {
    this.nav.setRoot(pageP);
  }
}
