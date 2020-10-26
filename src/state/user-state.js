import { atom } from "recoil";

const userState = atom({
  key: "user-state",
  default: { token: undefined, authenticated: false, givenName: undefined },
});

export default userState;
