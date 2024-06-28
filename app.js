const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();


mongoose.connect("mongodb://localhost:27017/Ecommerce_website", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connection succeeded");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/sign_up", async (req, res) => {
  const { name, email, password, phone } = req.body;

  const data = { name, email, password, phone };

  try {
    await db.collection("Ecom-Data").insertOne(data);
    console.log("Record inserted successfully");
    res.redirect("signup_success.html");
  } catch (err) {
    console.error("Error inserting record:", err);
    res.status(500).send("An error occurred during sign-up.");
  }
});

app.get("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
  });
  req.redirect("contact-us.html");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
