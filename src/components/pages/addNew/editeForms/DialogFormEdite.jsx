import * as React from 'react';
import {Button,Slide , Dialog,DialogActions ,DialogContent,DialogContentText ,DialogTitle} from '@mui/material';

import MyContext from '../../../../context';
import { CreateRounded, DeleteForeverRounded } from "@mui/icons-material";
import { deleteQuestions } from '../../../services/allServices';
import { toast } from 'react-toastify';
import FormEditeGroupTest from './FormEditeGroupTest';
import FormEditeTest from './FormEditeTest';
import FormEditeQuest from './FormediteQuestion';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogFormEdite({index ,  nameEdite,nameComponentEdite } ) {

  const [open, setOpen] = React.useState(false);
  const {setIndexDataGroupTests ,setIndexDataTests,setIndexDataQuestion} = React.useContext(MyContext);
  const handleClickOpen = () => {
    // console.log(data);
    setOpen(true);
      switch (nameComponentEdite) {
        case 'groupTest':
          setIndexDataGroupTests(index);
        break;
        case 'test':
          setIndexDataTests(index);
        break;
        case 'question':
          setIndexDataQuestion(index);
        break;
    
      default:
        null
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };



  
  return (
    <>
      <Button variant="text" onClick={handleClickOpen}>
      <CreateRounded />
      </Button>
      <Dialog
      
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
       
      >
        <DialogTitle>اسم جدیدی برای {nameEdite}  دسته بندی بزار </DialogTitle>
        <DialogContent>
          {nameComponentEdite == 'groupTest' ? (<FormEditeGroupTest/>) : null }
          {nameComponentEdite == 'test' ? (<FormEditeTest/>) : null }
          {nameComponentEdite == 'question' ? (<FormEditeQuest/>) : null }
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>لغو</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}