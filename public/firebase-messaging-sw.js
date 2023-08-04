/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBw3eCA9f2zpZiO5Kfdp2Dvh3-4z7LY_yY",
  authDomain: "lifeisplan.firebaseapp.com",
  projectId: "lifeisplan",
  storageBucket: "lifeisplan.appspot.com",
  messagingSenderId: "18219770778",
  appId: "1:18219770778:web:acb3ea96a4ed1a80bf1023",
  measurementId: "G-5DHS13DKGQ",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

self.addEventListener("push", (event) => {
  const payload = event.data.json();

  const { title = "", body = "", icon } = payload.notification || {};

  const options = {
    body,
    icon,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
