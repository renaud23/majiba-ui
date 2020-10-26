import React from "react";
import classnames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";

function Waiting({ status }) {
  if (!status) {
    return null;
  }
  return (
    <div className={classnames("waiting")}>
      <div className="circular">
        <CircularProgress color="secondary" />
      </div>
    </div>
  );
}

export default Waiting;
