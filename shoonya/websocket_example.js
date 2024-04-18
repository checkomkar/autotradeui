const Api = require("./lib/RestApi");
const { TOTP } = require("totp-generator");
let { authparams } = require("./cred");

api = new Api({});
const { otp } = TOTP.generate(authparams.totpToken);
authparams.twoFA = otp;
function receiveQuote(data) {
  console.log("Quote ::", data);
}

function receiveOrders(data) {
  console.log("Order ::", data);
}

function open(data) {
  // console.log("subsribing to :: ", instruments);
}

api
  .login(authparams)
  .then((res) => {
    if (res.stat !== "Ok") return;

    params = {
      socket_open: open,
      quote: receiveQuote,
      order: receiveOrders,
    };

    api.start_websocket(params);
    setTimeout(() => {
      let instruments = "NFO|52222";
      api.subscribe(instruments);
    }, 2000);
  })
  .catch((err) => {
    console.error(err);
  });
