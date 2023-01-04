import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'producto4-angular';
  message:any = null;
  constructor() {}

  firebaseConfig = {
    apiKey: "AIzaSyDqVLf_nE15XdaWXbKGa9tP3yPRDS7ligg",
    authDomain: "frontend-e257b.firebaseapp.com",
    projectId: "frontend-e257b",
    storageBucket: "frontend-e257b.appspot.com",
    messagingSenderId: "943284013949",
    appId: "1:943284013949:web:54881d713a4697be3c5a14"
  };

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }
  
  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
           getToken(messaging, 
            { vapidKey: environment.firebase.vapidKey}).then(
              async (currentToken) => {
                if (currentToken) {
                  console.log("Hurraaa!!! we got the token.....");
                  console.log(currentToken);
       
                  const app = getApp();
       
                  const db = getFirestore(app);
       
                  const tokensCollection = collection(db, 'tokens')
       
                   const q = query(collection(db, "tokens"), where("tokenId", "==", currentToken));
       
                   const querySnapshot = await getDocs(q);
       
                   const currentTokenExists = querySnapshot.docs.length > 0;
       
                   if (!currentTokenExists) {
                     addDoc(tokensCollection, {
                       tokenId: currentToken
                   })
               }
                } else {
                  console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err) => {
               console.log('An error occurred while retrieving token. ', err);
           });
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
      alert(this.message.notification.title);
    });
  }
}