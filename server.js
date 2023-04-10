import express from "express";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const configuration = new Configuration({ apiKey: process.env.CHAT_GPT_KEY });
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const { body } = req;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: body.prompt }],
  });
  res.send(completion?.data?.choices[0].message?.content);
});

const PORT = 2020;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
