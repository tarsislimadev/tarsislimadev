// 

import { sendMessage } from './send-message.js';

fetch('https://rss.nytimes.com/services/xml/rss/nyt/Business.xml')
  .then((response) => response.text())
  .then((xml) => `NYT XML`) // fixme
  .then((message) => sendMessage(message))
  .catch((error) => console.error("Error fetching news:", error));
