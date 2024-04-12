"use client";

import { MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import InputLabel from "@mui/material/InputLabel";
import TabbedSection from "./components/TabbedSection";
import TradeSection from "./components/TradeSection";

function Terminal() {
  const defaultOptions = { exchange: "", segment: "" };
  const [exchange, setExchange] = useState("");
  const [allOptions, setAllOptions] = useState<any>({ exchange: "" });
  const handleSelectChange = (event: SelectChangeEvent) => {
    console.log("form event", event.target.name);
    switch (event.target.name) {
      case "exchange":
        setAllOptions({ ...allOptions, exchange: event.target.value });
        break;
      case "segment":
        setAllOptions({ ...allOptions, segment: event.target.value });
        break;
      case "symbol":
        setAllOptions({ ...allOptions, symbol: event.target.value });
        break;
      case "expiryDate":
        setAllOptions({ ...allOptions, expiryDate: event.target.value });
        break;
      case "callStrike":
        setAllOptions({ ...allOptions, callStrike: event.target.value });
        break;
      case "putStrike":
        setAllOptions({ ...allOptions, putStrike: event.target.value });
        break;
      case "lotSize":
        setAllOptions({ ...allOptions, lotSize: event.target.value });
        break;
      case "product":
        setAllOptions({ ...allOptions, product: event.target.value });
        break;
      case "orderType":
        setAllOptions({ ...allOptions, orderType: event.target.value });
        break;
      case "protection":
        setAllOptions({ ...allOptions, protection: event.target.value });
        break;
      case "position":
        setAllOptions({ ...allOptions, position: event.target.value });
        break;
      case "predefinedSLPoints":
        setAllOptions({
          ...allOptions,
          predefinedSLPoints: event.target.value,
        });
        break;
      case "predefinedTargetPoints":
        setAllOptions({
          ...allOptions,
          predefinedTargetPoints: event.target.value,
        });
        break;
    }
    setExchange(event.target.value);
  };
  return (
    <>
      <Container>
        <Grid spacing={2} sx={{ pt: 2 }}>
          <h3>Broker: Finvasia (FA***23)</h3>
        </Grid>
        <Grid sx={{ mt: 2 }}>
          <Stack direction="row" spacing={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Exchange
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={allOptions.exchange}
                label="Exchange"
                name="exchange"
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"NSE"}>NSE</MenuItem>
                <MenuItem value={"BSE"}>BSE</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="segment-label">Segment</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="segment"
                value={allOptions.segment}
                label="Segment"
                name="segment"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={"options"}>
                  Options
                </MenuItem>
                <MenuItem value={"futures"}>Futures</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="symbol-label">Symbol</InputLabel>
              <Select
                labelId="symbol-label"
                id="symbol"
                value={allOptions.symbol}
                label="Symbol"
                name="symbol"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={"NIFTY"}>
                  NIFTY
                </MenuItem>
                <MenuItem value={"BANKNIFTY"}>BANKNIFTY</MenuItem>
                <MenuItem value={"FINNIFTY"}>FINNIFTY</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="exp-label">Expiry Date</InputLabel>
              <Select
                labelId="exp-label"
                id="expiry"
                value={allOptions.expiryDate}
                label="Expiry"
                name="expiryDate"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={"18-Apr-2024"}>
                  18-Apr-2024
                </MenuItem>
                <MenuItem value={"25th-Apr-2024"}>25th-Apr-2024</MenuItem>
                <MenuItem value={"02-May-2024"}>02-May-2024</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="call-stk-label">Call Strike</InputLabel>
              <Select
                labelId="call-stk-label"
                id="call-strike"
                value={allOptions.callStrike}
                label="Call Strike"
                name="callStrike"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={"18-Apr-2024"}>
                  22500
                </MenuItem>
                <MenuItem value={"25th-Apr-2024"}>22550</MenuItem>
                <MenuItem value={"02-May-2024"}>22600</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="put-stk-label">Put Strike</InputLabel>
              <Select
                labelId="put-stk-label"
                id="put-strike"
                value={allOptions.putStrike}
                label="Put Strike"
                name="putStrike"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={"18-Apr-2024"}>
                  22500
                </MenuItem>
                <MenuItem value={"25th-Apr-2024"}>22550</MenuItem>
                <MenuItem value={"02-May-2024"}>22600</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="lot-size-label">Lot Size</InputLabel>
              <Select
                labelId="lot-size-label"
                id="lot-size"
                value={allOptions.lotSize}
                label="Lot Size"
                name="lotSize"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={1}>
                  1
                </MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={4} sx={{ mt: 2 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="product-label">Product</InputLabel>
              <Select
                labelId="product-label"
                id="product-strike"
                value={allOptions.product}
                label="Product"
                name="product"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={"intraday"}>
                  Intraday
                </MenuItem>
                <MenuItem value={"margin"}>Margin</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="order-type-label">Order Type</InputLabel>
              <Select
                labelId="order-type-label"
                id="order-type-strike"
                value={allOptions.orderType}
                label="Order Type"
                name="orderType"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={"market"}>
                  Market
                </MenuItem>
                <MenuItem value={"market protection"}>
                  Market Protection
                </MenuItem>
                <MenuItem value={"market protection"}>Limit At LTP</MenuItem>
                <MenuItem value={"market protection"}>Limit Order</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="protection-label">Protection %</InputLabel>
              <Select
                labelId="protection-label"
                id="protection"
                value={allOptions.orderType}
                label="Protection %"
                name="protection"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={2}>
                  2%
                </MenuItem>
                <MenuItem value={3}>3%</MenuItem>
                <MenuItem value={4}>4%</MenuItem>
                <MenuItem value={5}>5%</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="positions-label">Positions</InputLabel>
              <Select
                labelId="positions-label"
                id="positions"
                value={allOptions.position}
                label="Positions"
                name="positions"
                onChange={handleSelectChange}
              >
                <MenuItem defaultChecked value={"all"}>
                  All positions
                </MenuItem>
                <MenuItem value={"marketProtection"}>
                  Market Protection
                </MenuItem>
                <MenuItem value={"limitAtLtp"}>Limit At LTP</MenuItem>
                <MenuItem value={"limitOrder"}>Limit Order</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="predefSl"
              label="Predefined SL points"
              variant="standard"
              value={allOptions.predefinedSLPoints}
            />
            <TextField
              id="predefTgt"
              label="Predefined Target points"
              variant="standard"
              value={allOptions.predefinedTargetPoints}
            />
          </Stack>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          <TradeSection />
        </Grid>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          <TabbedSection />
        </Grid>
      </Container>
    </>
  );
}

export default Terminal;
