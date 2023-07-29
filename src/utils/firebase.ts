import constants from "@/utils/constants";
import { requestNotificationPermission } from "@/utils/notification";
import { initializeApp } from "firebase/app";
import { Messaging, getMessaging, getToken, onMessage } from "firebase/messaging";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBw3eCA9f2zpZiO5Kfdp2Dvh3-4z7LY_yY",
  authDomain: "lifeisplan.firebaseapp.com",
  projectId: "lifeisplan",
  storageBucket: "lifeisplan.appspot.com",
  messagingSenderId: "18219770778",
  appId: "1:18219770778:web:acb3ea96a4ed1a80bf1023",
  measurementId: "G-5DHS13DKGQ",
};

export const recieveFirebaseMessage = (messaging: Messaging) => {
  onMessage(messaging, (payload) => {
    const { title = "", body = "", icon } = payload.notification || {};

    const options = {
      body,
      icon,
    };

    if ("Notification" in window) {
      const notification = new Notification(title, options);
    }
  });
};

export const getFirebaseMessaging = () => {
  const firebaseApp = initializeApp(FIREBASE_CONFIG);
  const messaging = getMessaging(firebaseApp);

  return messaging;
};

export const getFirebaseDeviceToken = async (messaging: Messaging) => {
  const token = await getToken(messaging, {
    vapidKey: constants.FIREBASE.VAPID_KEY,
  });

  return token;
};

export const processFirebaseCloudMessaging = async () => {
  try {
    const isPermit = await requestNotificationPermission();

    if (!isPermit) {
      throw new Error("Not permitted notification..");
    }

    const messaging = getFirebaseMessaging();
    const token = await getFirebaseDeviceToken(messaging);

    recieveFirebaseMessage(messaging);

    return token;
  } catch (error) {
    console.error(error);

    return "";
  }
};
