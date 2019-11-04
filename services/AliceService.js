const axios = require("axios");
const { PARAM_FOR_POST } = require("../config/constants");
const querystring = require("querystring");

const DEFAULT_ANSWERS = {
  ["помощь"]:
    `Я помогу тебе управлять умным домом и нашим веб-сайтом. Просто озвучь желаемое и увидишь результат. Примеры команд: 
      1. Сколько у меня фильмов?
      2. Скрыть панель билетов
      3. Следующая страница.
      4. Отдать 1 билет Сэму.
      5. Я хочу посмотреть футбол.
      6. Какая температура в комнате Алисы?
      7. Измени локацию на Лондон.`,
  ["что ты умеешь"]:
    `Я могу помогать тебе в навигации на нашем сайте, например, переключать вкладки и тратить билеты на просмотр фильмов. Примеры команд:
      1. Сколько у меня фильмов?
      2. Скрыть панель билетов
      3. Следующая страница.
      4. Отдать 1 билет Сэму.
      5. Я хочу посмотреть футбол.
      6. Какая температура в комнате Алисы?
      7. Измени локацию на Лондон`
};

module.exports = class AliceService {
  static forwardToServer(msg) {
    msg = msg.toLowerCase();
    if (DEFAULT_ANSWERS[msg])
      return Promise.resolve({ data: DEFAULT_ANSWERS[msg] });
    return axios.post(
      "/",
      querystring.stringify({
        [PARAM_FOR_POST]: msg
      })
    );
  }
};
