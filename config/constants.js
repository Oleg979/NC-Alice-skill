module.exports = {
  START_MESSAGE: `Я помогу тебе управлять умным домом и нашим веб-сайтом. Просто озвучь желаемое и увидишь результат. Примеры команд:
1. Сколько у меня фильмов?
2. Скрыть панель билетов
3. Следующая страница.
4. Отдать 1 билет Сэму.
5. Я хочу посмотреть футбол.
6. Какая температура в комнате Алисы?
7. Измени локацию на Лондон.
`,
  EXIT_MESSAGE: "Good bye.",
  ERROR_MESSAGE:
    "Sorry, but server is not available. Please, consult a specialist",
  UNRECOGNIZED_INTENT: "Sorry, I don't understand you.",
  SERVER_HANDLE_URL:
    "https://alexa-control-panel.herokuapp.com/handle_user_request",
  SERVER_START_PAGE_URL:
    "https://alexa-control-panel.herokuapp.com/user/ricky/set_page?number_page:1",
  PARAM_FOR_POST: "userMessage"
};
