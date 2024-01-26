import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import * as React from "react";

import { DeleteForeverRounded } from "@mui/icons-material";
import { toast } from "react-toastify";
import MyContext from "../context";
import { deleteTests } from "./services/allServices";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDeleteTest({
  idTestDelete,
  nameTest,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { tests, setTests } = React.useContext(MyContext);

  const removeTest = async (testId) => {
    console.log(testId);
    try {
      const status = await deleteTests(testId);

      toast.error("با موفقیت حذف شد ", { icon: "🤷‍♂️" });

      setTests(() =>
        tests.filter((c) => c.id !== testId)
      );
    } catch (err) {
      console.log(err.message);
      // setGroupQuestion(groupBackup);
    }
    handleClose();
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpen}>
        <DeleteForeverRounded />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="border[#8d15e5] border-2"
      >
        <DialogTitle>ایا از پاک کردن {nameTest} مورد مطمعنی؟</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            چیزی که باید پاک بشه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>مخالفم</Button>
          <Button onClick={() => removeTest(idTestDelete)}>
            موافقم{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
