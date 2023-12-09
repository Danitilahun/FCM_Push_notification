import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";

export function initializeFirebase() {
  initializeApp({
    credential: applicationDefault(),
    projectId: "potion-for-creators",
  });
}

export function sendMessageToToken(token, notification) {
  const message = {
    notification: notification,
    token: token,
  };

  return getMessaging().send(message);
}
