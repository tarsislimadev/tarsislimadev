const {
  TELEGRAM_TOKEN,
  TELEGRAM_CHATID,
} = process.env;

const telegram_url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

export const sendMessage = (title) =>
  fetch(
    telegram_url,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHATID, text: title, }),
    }
  )
    .catch((error) => console.error("Error sending message to Telegram:", error));
