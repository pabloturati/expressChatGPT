# expressChatGPT

## Setup Instructions:

1. Clone this repo and navigate to the root folder
2. Go to https://platform.openai.com and get your API key. Keep it stored it safely!
3. Create a file called `.env` and save your API key as:
   `CHAT_GPT_KEY=<your own key>`
4. `npm install`
5. `npm start`

## Usage

```
curl --location 'http://localhost:2020' \
--header 'Content-Type: application/json' \
--data '{"prompt": "If you and Siri played a soccer match, who would win?"}'
```
