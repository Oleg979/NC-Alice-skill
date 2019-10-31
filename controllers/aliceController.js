const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const AliceService = require("../services/AliceService");
const { START_MESSAGE, ERROR_MESSAGE } = require("../config/constants");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/ping", async (req, res) => {
  const { request, session, version } = req.body;
  const text = request.original_utterance;
  res.status(200).send({
    version,
    session,
    response: {
      text: text || "Hello!",
      end_session: false
    }
  });
});

router.post("/", async (req, res) => {
  const { request, session, version } = req.body;
  const text = request.original_utterance;
  if (text == "")
    return res.status(200).send({
      version,
      session,
      response: {
        text: START_MESSAGE,
        tts: START_MESSAGE,
        end_session: false
      }
    });
  try {
    const serverResponse = await AliceService.forwardToServer(text);
    res.status(200).send({
      version,
      session,
      response: {
        text: serverResponse.data,
        tts: serverResponse.data,
        end_session: false
      }
    });
  } catch (e) {
    res.status(200).send({
      version,
      session,
      response: {
        text: ERROR_MESSAGE,
        tts: ERROR_MESSAGE,
        end_session: false
      }
    });
  }
});

module.exports = router;
