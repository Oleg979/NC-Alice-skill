const axios = require("axios");
const { PARAM_FOR_POST } = require("../config/constants");

module.exports = class AliceService {
  static forwardToServer() {
    axios
      .post(
        "/",
        querystring.stringify({
          [PARAM_FOR_POST]: msg
        })
      )
      .then(res => console.log(res))
      .then(e => console.log(e));
  }
};