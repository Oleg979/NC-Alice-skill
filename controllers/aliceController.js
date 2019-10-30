const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const AliceService = require("../services/AliceService");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/ping", async (req, res) => {
  const { request, session, version } = req.body;
  const text = request.original_utterance;
  res.status(200).send({
    version,
    session,
    response: {
      text: text || "Привет!",
      end_session: false
    }
  });
});

router.post("/", async (req, res) => {
  const { request, session, version } = req.body;
  const text = request.original_utterance;
  try {
    const serverResponse = await AliceService.forwardToServer(text);
    res.status(200).send({
      version,
      session,
      response: {
        text: serverResponse.data,
        end_session: false
      }
    });
  } catch (e) {
    res.status(200).send({
      version,
      session,
      response: {
        text: "Ошибка",
        end_session: false
      }
    });
  }
});

module.exports = router;
