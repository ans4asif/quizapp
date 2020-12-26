importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAvNIdDt2xGIBACCF1vFF-1cooMlbkC0ak",
    authDomain: "quiz-app-3ff98.firebaseapp.com",
    projectId: "quiz-app-3ff98",
    storageBucket: "quiz-app-3ff98.appspot.com",
    messagingSenderId: "786377330111",
    appId: "1:786377330111:web:a8f39bf21ef9bf4603a50a"
  };

  firebase.initializeApp(firebaseConfig);
 firebase.messaging();