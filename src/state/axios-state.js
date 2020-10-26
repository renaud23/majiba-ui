import { atom } from "recoil";

const state = atom({
  key: "axios-state",
  default: { majiba: undefined },
});

export default state;
