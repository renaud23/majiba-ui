import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Confirm({ name, open, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Renouveler le token Majiba de l'application {name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          En renouvelant le token de l'application, vous révoquerez
          immédiatement le précédent. Voulez-vous continuer ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onCancel} color="primary">
          Annuler
        </Button>
        <Button variant="contained" onClick={onConfirm} color="secondary">
          Renouveler
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Confirm;
