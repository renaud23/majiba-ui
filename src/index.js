import React from "react";
import ReactDom from "react-dom";
import { RecoilRoot } from "recoil";
import Application from "./components";

ReactDom.render(
  <RecoilRoot>
    <Application />
  </RecoilRoot>,
  document.getElementById("root")
);
