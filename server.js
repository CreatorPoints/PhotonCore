import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.KEY });

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Photon AI encountered an error." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
