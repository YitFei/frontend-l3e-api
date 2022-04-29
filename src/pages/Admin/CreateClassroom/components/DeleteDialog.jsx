import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ConstructionOutlined } from "@mui/icons-material";

export default function DeleteDialog(props) {
  const handleClose = () => {
    props.setOpenDeleteDialog(false);
    props.setConfirm(false);
  };
  //   React.useEffect(() => {
  //     props.setConfirm(false);
  //     console.log("Run");
  //   }, []);

  const handleConfirm = () => {
    props.setConfirm(true);
    props.setOpenDeleteDialog(false);
  };
  return (
    <Dialog
      open={props.openDeleteDialog}
      onClose={handleClose}
      //   PaperProps={{ sx: { width: "90%", border: 1, height: "80%" } }}
    >
      <DialogTitle>删除</DialogTitle>

      <DialogContent>"警告！是否刪除教室？ 刪除將無法恢復！"</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleConfirm}>
          <Typography sx={{ color: "red" }}>确认</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
