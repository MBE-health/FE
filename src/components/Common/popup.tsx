import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Typography,
} from "@mui/material";

interface PopupDialogProps {
  open: boolean;
  handleClose: any;
}

export default function PopupDialog({ open, handleClose }: PopupDialogProps) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h4">운동 플랜 생성 중</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <center>
              <CircularProgress color="secondary" />
            </center>
          </DialogContentText>
        </DialogContent>
        {/*<DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>*/}
      </Dialog>
    </div>
  );
}
