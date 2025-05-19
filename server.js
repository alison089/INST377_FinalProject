import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/api/coffee-image", async (req, res) => {
  const response = await fetch("https://coffee.alexflipnote.dev/random.json");
  const data = await response.json();
  res.json(data);
});

app.post("/api/analyze", async (req, res) => {
  const { description } = req.body;
  const url = `https://api.edamam.com/api/nutrition-data?app_id=${
    process.env.EDAMAM_APP_ID
  }&app_key=${process.env.EDAMAM_APP_KEY}&ingr=${encodeURIComponent(
    description
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
