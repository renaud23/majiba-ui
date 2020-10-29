import React from "react";
import Alert from "@material-ui/lab/Alert";

function Notification({ status }) {
  switch (status) {
    case 666:
      return (
        <Alert severity="success" className="notification">
          Le Diable s'en est mêlé !
        </Alert>
      );
    case 200:
      return (
        <Alert severity="success" className="notification">
          Votre jeton est renouvelé !
        </Alert>
      );
    case 400:
      return (
        <Alert severity="error" className="notification">
          Cette application n'éxiste pas !
        </Alert>
      );
    case 403:
    case 401:
      return (
        <Alert severity="error" className="notification">
          Vous n'avez pas les droits nécessaires !
        </Alert>
      );

    default:
      return null;
  }
}

export default Notification;
