import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { getMajibaApps } from "../../commons";

function MajibaApps() {
  useEffect(function () {
    getMajibaApps().then(function (apps) {
      console.log(apps);
    });
  });
  return <Paper elevation={2}></Paper>;
}

export default MajibaApps;
