import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { OrderFoodProvider } from '../providers/order-food/order-food';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { OptionProvider } from '../providers/option/option';
var firebaseConfig = {
  apiKey: "AIzaSyCT4ewSSOsgL-T7qa3z9X4sBsMta5nFGdY",
  authDomain: "orderapp-5f063.firebaseapp.com",
  databaseURL: "https://orderapp-5f063.firebaseio.com",
  projectId: "orderapp-5f063",
  storageBucket: "orderapp-5f063.appspot.com",
  messagingSenderId: "232522750174"
  // apiKey: "AIzaSyB2YM6LoQS2fP59vJ5Mj3E1O7-HaqHGwNw",
  // authDomain: "testorder-cdba7.firebaseapp.com",
  // databaseURL: "https://testorder-cdba7.firebaseio.com",
  // projectId: "testorder-cdba7",
  // storageBucket: "testorder-cdba7.appspot.com",
  // messagingSenderId: "547093173870"
};
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Trở về'
     }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    CurrencyMaskModule
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
    OrderFoodProvider,
    OptionProvider
  ]
})
export class AppModule { }
