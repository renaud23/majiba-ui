import React, { useCallback, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import classnames from "classnames";
import { majibaState } from "../../state";
import Paper from "@material-ui/core/Paper";
import { getMajibaApps } from "../../commons";
import Button from "@material-ui/core/Button";
import Waiting from "../waiting";
import { ReactLargeTable } from "react-scrollable-div";
import "./simple-theme.scss";

function ContentCell({ cell }) {
  const { value, key } = cell;
  return <span className={classnames("simple-theme-cell", key)}>{value}</span>;
}

function prepare(apps) {
  const rows = apps.map(function (e) {
    const values = Object.entries(e).reduce(function (o, [key, value]) {
      return { ...o, [key]: { value, key } };
    }, {});
    return { ...values, __height: 40 };
  });

  return {
    header: [
      { label: "Nom", path: "name", __width: 250, resizable: true },
      { label: "Module", path: "module", __width: 100, resizable: true },
      { label: "Type", path: "kind", __width: 300, resizable: true },
      { label: "Groupe AD", path: "ad", __width: 300, resizable: true },
    ],
    rows,
  };
}

function MajibaApps() {
  const [wait, setWait] = useState(false);
  const [tableData, setTableData] = useState(undefined);
  const [apps, setApps] = useRecoilState(majibaState);
  const refresh = useCallback(
    function () {
      setWait(true);
      getMajibaApps()
        .then(function (apps) {
          setWait(false);
          setApps(apps);
        })
        .catch(function () {
          setWait(false);
        });
    },
    [setApps]
  );

  useEffect(
    function () {
      if (apps) {
        setTableData(prepare(apps));
      }
    },
    [apps]
  );

  return (
    <Paper elevation={2}>
      <Waiting status={wait} />
      <Button
        variant="contained"
        color="primary"
        className="form-button"
        onClick={refresh}
      >
        {apps ? "Rafraichir la liste" : "Charger la liste"}
      </Button>
      {tableData && tableData.rows ? (
        <div className="table-apps-container">
          <ReactLargeTable
            data={tableData}
            headerHeight={50}
            className="simple-theme"
            cellRenderer={ContentCell}
          />
        </div>
      ) : null}
    </Paper>
  );
}

export default MajibaApps;
