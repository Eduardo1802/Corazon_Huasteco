importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js")

const firebaseConfig = {
    apiKey: "AIzaSyCXR191n7jFL7ZUvltSgLnWgd-DlO2n_yo",
    authDomain: "corazon-huasteco-bfbcc.firebaseapp.com",
    projectId: "corazon-huasteco-bfbcc",
    storageBucket: "corazon-huasteco-bfbcc.appspot.com",
    messagingSenderId: "636785870470",
    appId: "1:636785870470:web:8003e1a5c0f7eb157b3307",
    measurementId: "G-9CWJ2R8N32"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log("recibiste un mensaje mientras estabas ausente");

    // previo a mostrar notificacion 
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/pwa-192x192.png"
    }

    return self.registration.showNotification(
        notificationTitle, 
        notificationOptions
    );
})