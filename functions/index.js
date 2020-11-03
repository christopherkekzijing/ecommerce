const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hgh6rGs2aQeOL98gV6FOmLoL7RFJJJ7AsoxdF6QGORhERrfbiTmA8Ok7tR6H7ihK4FRSTR0CViPsq6EBzjztjnG003VD4rsJZ",
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
//http://localhost:5001/ecommerce-968cc/us-central1/api
