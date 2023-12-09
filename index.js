import express from "express";
import cors from "cors";
import { sendNotification } from "./controllers/messagingController";
import { initializeFirebase } from "./services/firebaseService";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

initializeFirebase();

app.post("/send", sendNotification);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
