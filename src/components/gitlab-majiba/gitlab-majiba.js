import React, { useEffect } from "react";
import { userState } from "../../state";
import { useRecoilState } from "recoil";

const GITLAB_URI = "https://gitlab.insee.fr/";

const MAJIBA_PATH = "api/v4/projects/22/access_requests";
//
function GitlabMajiba() {
  const [user, setUserState] = useRecoilState(userState);
  const { token } = user;
  useEffect(
    function () {
      fetch(`${GITLAB_URI}${MAJIBA_PATH}?access_token=${token}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log(json);
        });
    },
    [token]
  );

  return <div></div>;
}

export default GitlabMajiba;
