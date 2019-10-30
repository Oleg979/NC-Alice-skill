const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/ping", async (req, res) => {
  const { request, session, version } = req.body;
  res.status(200).send({
    version,
    session,
    response: {
      text: request.original_utterance || "Hello!",
      end_session: false
    }
  });
});

module.exports = router;
