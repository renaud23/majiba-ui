const gitlabUri = process.env.REACT_APP_GITLAB_URI;
const accessToken = process.env.REACT_APP_GITLAB_TOKEN;
const resourceName = "liste_majibav2groupe.csv";

// application;module;majtomcat;majbatch;majjavascript;environnement;groupead

function appKind(tomcat, batch, js) {
  if (tomcat === "1") {
    return "application/tomcat";
  }
  if (batch === "1") {
    return "application/batch";
  }
  if (js === "1") {
    return "application/javascript";
  }
  return "application/unknow";
}

// function buildAppList(rows = []) {
//   return rows.reduce(function (apps, row, i) {
//     if (i > 0) {
//       const tmp = row.split(";");

//       return [
//         ...apps,
//         {
//           name: tmp[0],
//           module: tmp[1],
//           kind: appKind(tmp[2], tmp[3], tmp[4]),
//           env: tmp[5],
//           ad: tmp[6],
//         },
//       ];
//     }
//     return [];
//   }, []);
// }

function buildAppList(rows = []) {
  const tmp = rows.reduce(function (apps, row, i) {
    if (i > 0) {
      const tmp = row.split(";");
      const name = tmp[0];
      if (name in apps) {
        return {
          ...apps,
          [name]: {
            name,
            modules: [...apps[name].modules, tmp[1]],
            kind: appKind(tmp[2], tmp[3], tmp[4]),
            env: tmp[5],
            ad: tmp[6],
          },
        };
      }
      return {
        ...apps,
        [name]: {
          name,
          modules: tmp[1].length ? [tmp[1]] : [],
          kind: appKind(tmp[2], tmp[3], tmp[4]),
          env: tmp[5],
          ad: tmp[6],
        },
      };
    }
    return apps;
  }, {});
  return Object.values(tmp);
}

async function getMajibaApps() {
  const uri = `/api/v4/projects/834/repository/files/${resourceName}/blame?ref=master`;
  try {
    const response = await fetch(`${gitlabUri}${uri}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/text",
        "PRIVATE-TOKEN": accessToken,
      },
    });
    const [{ lines }] = await response.json();
    return buildAppList(lines);
  } catch (e) {
    console.log(e);
  }
}

export default getMajibaApps;
