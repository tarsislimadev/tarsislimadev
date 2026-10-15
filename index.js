// 

const newsapi_url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`

const telegram_url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`

fetch(newsapi_url)
  .then((response) => response.json())
  .then((data) => data.articles[0].title)
  .then((title) => {
    fetch(
      telegram_url,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHATID,
          text: title,
          parse_mode: "MarkdownV2",
        }),
      }
    )
  })
