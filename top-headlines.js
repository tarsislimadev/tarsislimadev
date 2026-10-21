// Send message to Telegram API

const {
  NEWS_API_KEY,
  TELEGRAM_TOKEN,
  TELEGRAM_CHATID,
} = process.env;

const newsapi_url = () => `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`

const telegram_url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

fetch(newsapi_url())
  .then((response) => response.json())
  .then((data) => `${data.articles[0].title}\n\n${data.articles[0].url}`)
  .then((title) => {
    fetch(
      telegram_url,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHATID, text: title, }),
      }
    )
      .catch((error) => console.error("Error sending message to Telegram:", error));
  })
  .catch((error) => console.error("Error fetching news:", error));
