import { initializeApp } from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyDkNXIVmogka6YdbxmFK84m5qiAL6lDGD0",
    authDomain: "task-database-34aa5.firebaseapp.com",
    databaseURL: "https://task-database-34aa5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "task-database-34aa5",
    storageBucket: "task-database-34aa5.appspot.com",
    messagingSenderId: "514191305507",
    appId: "1:514191305507:web:f67217b6fea445f3fd3a96",
    measurementId: "G-Z6J9CGE8LL"
  };

  export const app = initializeApp(firebaseConfig)