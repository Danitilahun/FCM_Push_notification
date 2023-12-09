// messagingController.js

import { sendMessageToToken } from "../services/firebaseService";

export function sendNotification(req, res) {
  const receivedToken = req.body.fcmToken;

  const notification = {
    title: "Notif",
    body: "This is a Test Notification",
  };

  sendMessageToToken(receivedToken, notification)
    .then((response) => {
      res.status(200).json({
        message: "Successfully sent message",
        token: receivedToken,
      });
      console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log("Error sending message:", error);
    });
}
