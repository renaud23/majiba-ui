import React, { useCallback, useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ReactLargeTable } from "react-scrollable-div";
import classnames from "classnames";
import { majibaState } from "../../state";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Subject from "@material-ui/icons/Subject";
import Waiting from "../waiting";
import { getMajibaApps } from "../../commons";
import "./simple-theme.scss";

function Modules({ list, anchor }) {
  const [display, setDisplay] = useState(false);

  if (list.length) {
    return !display ? (
      <IconButton
        size="small"
        aria-label="delete"
        color="primary"
        onClick={() => setDisplay(!display)}
      >
        <Subject />
      </IconButton>
    ) : (
      <Menu open={display} onClose={() => setDisplay(false)} anchorEl={anchor}>
        {list.map(function (label) {
          return <MenuItem key={label}>{label}</MenuItem>;
        })}
      </Menu>
    );
  }
  return null;
}

function ContentCell({ cell }) {
  const anchorEl = useRef(null);
  const { value, key } = cell;
  if (key === "modules") {
    return (
      <span className={classnames("simple-theme-cell", key)} ref={anchorEl}>
        <Modules list={value} anchor={anchorEl.current} />
      </span>
    );
  }
  return <span className={classnames("simple-theme-cell", key)}>{value}</span>;
}

function prepare(apps) {
  const rows = apps.map(function (e, i) {
    const values = Object.entries(e).reduce(function (o, [key, value]) {
      return { ...o, [key]: { value, key } };
    }, {});
    return { ...values, index: { value: i + 1 }, __height: 40 };
  });

  return {
    header: [
      { label: "Index", path: "index", __width: 80, resizable: true },
      { label: "Nom", path: "name", __width: 250, resizable: true },
      { label: "Modules", path: "modules", __width: 100, resizable: true },
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
