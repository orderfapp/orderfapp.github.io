import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { OrderProvider } from '../providers/order/order';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
var firebaseConfig = {
  apiKey: "AIzaSyCT4ewSSOsgL-T7qa3z9X4sBsMta5nFGdY",
  authDomain: "orderapp-5f063.firebaseapp.com",
  databaseURL: "https://orderapp-5f063.firebaseio.com",
  projectId: "orderapp-5f063",
  storageBucket: "orderapp-5f063.appspot.com",
  messagingSenderId: "232522750174"
};
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticateProvider,
    OrderProvider
  ]
})
export class AppModule { }
