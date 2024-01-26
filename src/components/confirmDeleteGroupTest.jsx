import * as React from 'react';
import {Button,Slide , Dialog,DialogActions ,DialogContent,DialogContentText ,DialogTitle} from '@mui/material';

import MyContext from '../context';
import { DeleteForeverRounded } from "@mui/icons-material";
import { deleteGroupTests } from './services/allServices';
import { toast } from 'react-toastify';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDeleteGroupTest({idGroupTestsDelete , nameGroupTest } ) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {groupTests, setGroupTests } = React.useContext(MyContext);

    const removeGroupTests = async (groupTestsId) =>{
    // const groupBackup = [...GroupTests];
    try{
      const status = await deleteGroupTests(groupTestsId);
      
      toast.error("با موفقیت حذف شد " , {icon:"🤷‍♂️"})
      
      setGroupTests(() => groupTests.filter((c)=> c.id !== groupTestsId))
    }catch(err){
      console.log(err.message);
    }
    handleClose()
  }
  
  return (
    <>
      <Button variant="text" onClick={handleClickOpen}>
        <DeleteForeverRounded/>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="border[#8d15e5] border-2"
      >
        <DialogTitle>ایا از پاک کردن {nameGroupTest} مورد مطمعنی؟</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          چیزی که باید پاک بشه 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>مخالفم</Button>
          <Button onClick={()=> removeGroupTests(idGroupTestsDelete)}>موافقم </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}