const axios = require("axios");
const { PARAM_FOR_POST } = require("../config/constants");
const querystring = require("querystring");

const DEFAULT_ANSWERS = {
  ["помощь"]:
    "Я помогу тебе управлять умным домом и нашим веб-сайтом. Просто озвучь желаемое и увидишь результат.",
  ["что ты умеешь"]:
    "Я могу помогать тебе в навигации на нашем сайте, например, переключать вкладки и тратить билеты на просмотр фильмов."
};

module.exports = class AliceService {
  static forwardToServer(msg) {
    msg = msg.toLowerCase();
    if (DEFAULT_ANSWERS[msg]) return Promise.resolve(DEFAULT_ANSWERS[msg]);
    return axios.post(
      "/",
      querystring.stringify({
        [PARAM_FOR_POST]: msg
      })
    );
  }
};
