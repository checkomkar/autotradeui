import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
} from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

function TradeSection() {
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
          LTP: 22519.14{" "}
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
