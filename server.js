const PORT = 8000;
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

app.use(cors());

const API_KEY2 = "tune-de592e91-eb27-422e-a502-9fe21b329e471709284355";
const API_KEY = "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";
const API_KEY3 = "tune-cf938e0a-fa05-4de6-9255-9431d21056e91709285403";
const API_KEY4 = "tune-4c4549ed-b198-4556-bb82-850cd6b715bb1709380750";
const API_KEY5 = "f99eD2qtXQWB15ZhWi4g2NZy59jCf3TX";
let textData = "";

app.post("/completions", async (req, res) => {
  if (req.body.service === "ChatGPT") {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${req.body.message} simplify`,
          },
        ],
        max_tokens: 500,
      }),
    };
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        options
      );
      const data = await response.json();
      res.send(data);
    } catch (err) {
      console.error(err);
    }
  }
  if (req.body.service === "Mistral") {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY2}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-inst-v0-1-32k",
        messages: [
          {
            role: "user",
            content: `${req.body.message} summarize and simplify under 40 words`,
          },
        ],
        max_tokens: 500,
      }),
    };
    try {
      const response = await fetch(
        "https://chat.tune.app/api/chat/completions",
        options
      );
      const data = await response.json();
      res.send(data);
    } catch (err) {
      console.error(err);
    }
  }
  if (req.body.service === "Gemma") {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY3}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma-7b-it",
        messages: [
          {
            role: "user",
            content: `${req.body.message} `,
          },
        ],
        max_tokens: 500,
      }),
    };
    try {
      const response = await fetch(
        "https://chat.tune.app/api/chat/completions",
        options
      );
      const data = await response.json();
      res.send(data);
    } catch (err) {
      console.error(err);
    }
  }


app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
