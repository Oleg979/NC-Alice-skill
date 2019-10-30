const axios = require("axios");
const { PARAM_FOR_POST } = require("../config/constants");

export default class AliceService {
  static forwardToServer = async msg => {
    try {
      const response = await axios.post(
        "/",
        querystring.stringify({
          [PARAM_FOR_POST]: msg
        })
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
}
