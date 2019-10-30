const axios = require("axios");
const { PARAM_FOR_POST } = require("../config/constants");
const querystring = require("querystring");

module.exports = class AliceService {
  static forwardToServer(msg) {
    axios
      .post(
        "/",
        querystring.stringify({
          [PARAM_FOR_POST]: msg
        })
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(e => {
        console.log(e);
        return "Unknown error";
      });
  }
};
