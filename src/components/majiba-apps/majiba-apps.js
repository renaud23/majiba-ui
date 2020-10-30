import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { majibaState } from "../../state";
import Paper from "@material-ui/core/Paper";
import { getMajibaApps } from "../../commons";
import Button from "@material-ui/core/Button";
import Waiting from "../waiting";
import { ReactLargeTable } from "react-scrollable-div";
import "./simple-theme.scss";

// name: "web4g", module: "bojs", kind: "application/javascript", env: "prd", ad: "AD\DG75-SNDI-Maintenance-Web4G"

function prepare(apps) {
  const rows = apps.map(function (e) {
    return { ...e, __height: 30 };
  });

  return {
    header: [
      { label: "Nom", path: "name", __width: 100, resizable: true },
      { label: "module", path: "Module", __width: 100, resizable: true },
      { label: "Type", path: "kind", __width: 200, resizable: true },
      { label: "Groupe AD", path: "ad", __width: 300, resizable: true },
    ],
    rows,
  };
}

function MajibaApps() {
  const [wait, setWait] = useState(false);
  const [apps, setApps] = useRecoilState(majibaState);
  const refresh = useCallback(
    function () {
      setWait(true);
      getMajibaApps()
        .then(function (apps) {
          setWait(false);
          setApps(prepare(apps));
        })
        .catch(function () {
          setWait(false);
        });
    },
    [setApps]
  );
  console.log(apps);
  return (
    <Paper elevation={2}>
      <Waiting status={wait} />
      <Button
        variant="contained"
        color="primary"
        className="form-button"
        onClick={refresh}
      >
        {apps && apps.rows.length ? "Rafraichir la liste" : "Charger la liste"}
      </Button>
      {apps && apps.rows.length ? (
        <div className="table-apps-container">
          <ReactLargeTable
            data={apps}
            headerHeight={50}
            className="simple-theme"
          />
        </div>
      ) : null}
    </Paper>
  );
}

export default MajibaApps;
