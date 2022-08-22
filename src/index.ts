import express from "express";

const app = express();

app.use(express.json());

app.use("/", () => {
  console.log("You're in main port");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
