// Send message to Telegram API

import { sendMessage } from './send-message.js';

const { NEWS_API_KEY, NEWS_QUERY = 'france' } = process.env;

fetch(`https://newsapi.org/v2/everything?q=${NEWS_QUERY}&apiKey=${NEWS_API_KEY}`)
  .then((response) => response.json())
  .then((data) => `${data.articles[0].title}\n\n${data.articles[0].url}`)
  .then((message) => sendMessage(message))
  .catch((error) => console.error("Error fetching news:", error));
