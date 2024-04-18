// "use-client";

import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
} from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

// import API from "../../../../shoonya/lib/RestApi";
import Grid from "@mui/material/Unstable_Grid2";
import { TOTP } from "totp-generator";

const authparams = {
  userid: "FA26323",
  password: "Global@99510",
  twoFA: "OTP/TOTP",
  vendor_code: "FA26323_U",
  api_secret: "d4cca4f8be3c72a58a8ee8358ccdd81e",
  imei: "abc1234",
  totpToken: "4U35W6I42L53VYXLM7F46XN7AR6Q6PZW",
};

function TradeSection() {
  // const api = new API({});
  const [lp, setLp] = useState(0);
  // const { otp } = TOTP.generate(authparams.totpToken);
  // authparams.twoFA = otp;
  // function receiveQuote(data: any) {
  //   console.log("Quote ::", data);
  //   setLp(data.lp);
  // }

  // function receiveOrders(data: any) {
  //   console.log("Order ::", data);
  // }

  // function open(data: any) {
  //   // console.log("subsribing to :: ", instruments);
  //   let instruments = "NFO|52222";
  //   api.subscribe(instruments);
  // }

  // api
  //   .login(authparams)
  //   .then((res: any) => {
  //     if (res.stat !== "Ok") return;

  //     const params = {
  //       socket_open: open,
  //       quote: receiveQuote,
  //       order: receiveOrders,
  //     };

  //     api.start_websocket(params);
  //     setTimeout(() => {
  //       let instruments = "NFO|52222";
  //       api.subscribe(instruments);
  //     }, 5000);
  //   })
  //   .catch((err: any) => {
  //     console.error(err);
  //   });

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      // console.log("event", json);
      try {
        if (json) {
          let incomingData = json.str;
          if (incomingData.lp) setLp(incomingData.lp || 0);
        }
      } catch (err) {
        console.log(err);
      }
    };
    return () => ws.close();
  }, []);
  return (
    <>
      <Grid xs={12} md sx={{ textAlign: { md: "left", xs: "center" } }}>
        <Stack mt={1}>Strike: NIFTY24041822550CE</Stack>
        <Stack mt={1}>LTP: 128.65</Stack>
        <Stack mt={2}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ justifyContent: { md: "left", xs: "center" } }}
          >
            <Button variant="contained" color="error" startIcon={<ArrowBack />}>
              Sell Call
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<ArrowUpward />}
            >
              Buy Call
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={12} md={6} sx={{ textAlign: "center" }}>
        <Stack mt={1}>NIFTY 50</Stack>
        <Stack mt={1} direction={"row"} sx={{ justifyContent: "center" }}>
          LTP: {lp}{" "}
          <span style={{ color: "red", paddingLeft: "10px" }}>
            (-234.40/-1.03%)
          </span>
        </Stack>
        <Stack
          mt={2.5}
          direction={"row"}
          sx={{ justifyContent: "center" }}
          spacing={2}
        >
          <Button variant="outlined" color="error">
            Close All Positions (F6)
          </Button>
          <Button variant="outlined" color="error">
            Cancel All Orders (F7)
          </Button>
        </Stack>
      </Grid>
      <Grid xs={12} md sx={{ textAlign: { md: "right", xs: "center" } }}>
        <Stack mt={1}>Strike: NIFTY24041822550PE</Stack>
        <Stack mt={1}>110.45: LTP </Stack>
        <Stack mt={2}>
          <Stack
            direction={"row"}
            sx={{ justifyContent: { md: "right", xs: "center" } }}
            spacing={2}
          >
            <Button
              variant="contained"
              color="success"
              startIcon={<ArrowDownward />}
              sx={{ ml: 6 }}
            >
              Buy Put
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<ArrowForward />}
            >
              Sell Put
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </>
  );
}

export default TradeSection;
