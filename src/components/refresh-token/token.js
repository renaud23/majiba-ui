import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Assignment from "@material-ui/icons/Assignment";
import IconButton from "@material-ui/core/IconButton";
import { writeText } from "clipboard-polyfill/text";

function Token({ value }) {
  if (!value) {
    return null;
  }
  return (
    <FormControl fullWidth variant="outlined" className="token">
      <InputLabel htmlFor="outlined-adornment-amount">Token</InputLabel>
      <OutlinedInput
        id="token"
        label="Token"
        type="text"
        disabled={true}
        variant="outlined"
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="copy"
              title="copy"
              onClick={function () {
                writeText(value);
              }}
            >
              <Assignment />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default Token;
