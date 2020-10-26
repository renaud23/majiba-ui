import { atom } from "recoil";

const userState = atom({
  key: "user-state",
  default: { token: undefined, authenticated: false },
});

export default userState;
