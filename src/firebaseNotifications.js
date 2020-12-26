import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAvNIdDt2xGIBACCF1vFF-1cooMlbkC0ak",
    authDomain: "quiz-app-3ff98.firebaseapp.com",
    projectId: "quiz-app-3ff98",
    storageBucket: "quiz-app-3ff98.appspot.com",
    messagingSenderId: "786377330111",
    appId: "1:786377330111:web:a8f39bf21ef9bf4603a50a"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotifications() {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log(permission);
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token");
                    console.log(currentToken);

                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);

            });

        }

    })
}
