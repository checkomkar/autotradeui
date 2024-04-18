const Api = require("./lib/RestApi");
const { TOTP } = require("totp-generator");
let { authparams } = require("./cred");

api = new Api({});

// totp = new TOTP();

const { otp } = TOTP.generate(authparams.totpToken);
authparams.twoFA = otp;
api
  .login(authparams)
  .then((res) => {
    console.log("Reply: ", res);
    return;
  })
  .catch((err) => {
    console.error(err);
  });
