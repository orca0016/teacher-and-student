import * as React from 'react';
import {Button,Slide , Dialog,DialogActions ,DialogContent,DialogContentText ,DialogTitle} from '@mui/material';

import MyContext from '../context';
import { DeleteForeverRounded } from "@mui/icons-material";
import { deleteQuestions } from './services/allServices';
import { toast } from 'react-toastify';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDeleteQuestion({idQuestion , nameQuestion } ) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(idQuestion);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {testQuestions, setTestQuestions } = React.useContext(MyContext);

    const removeGroupTests = async (idQuestion) =>{
    // const groupBackup = [...GroupTests];
    try{
      const status = await deleteQuestions(idQuestion);
      if(status === 200){
        toast.error("با موفقیت حذف شد " , {icon:"🤷‍♂️"})
      }
      
      setTestQuestions(() => testQuestions.filter((c)=> c.id !== idQuestion))
    }catch(err){
      toast.error("خطا دارید  " , {icon:"🤷‍♂️"})
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
        <DialogTitle>ایا از پاک کردن {nameQuestion} مورد مطمعنی؟</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          چیزی که باید پاک بشه 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>مخالفم</Button>
          <Button onClick={()=> removeGroupTests(idQuestion)}>موافقم </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}