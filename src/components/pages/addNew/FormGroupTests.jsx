import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useContext } from "react";
import { toast } from "react-toastify";
import MyContext from "../../../context";

import { ValidationTests } from "../../../validations/validationTests.js";
import { createGroupTests } from "../../services/allServices";
import TableGroupTests from "./TableGroupTests";
import _ from 'lodash'; // وارد کردن lodash

const FormGroupTests = () => {
  const { groupTests, setGroupTests } = useContext(MyContext);

  const inputGroup = {
    nameGroupTest: "",
  };
  const addObject = (name) => {
    const lastId =
      groupTests.length > 0 ? groupTests[groupTests.length - 1].id : 0;
    const newObject = { id: lastId + 1, nameGroupTest: name };
    setGroupTests([...groupTests, newObject]);
  };

  const notify = _.debounce(() =>
  toast.success("با موفقیت ساخته شد 👍", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon: false,
  }), 500);

  const formik = useFormik({
    initialValues: inputGroup,
    onSubmit: (values) => {
      console.log(values);
      createGroupTests(values);
      addObject(values.nameGroupTest);
      notify();
      formik.resetForm();
    },
    validationSchema: ValidationTests,
  });

  const handleNameGroupTestChange = (event) => {    
    formik.handleChange(event);
  };
  return (
    <>
      <TableGroupTests />

      <Divider sx={{ my: 3 }} />
      <Box className="px-5">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <TextField
                fullWidth
                size="small"
                color="secondary"
                label="گروه جدید بسازید"
                name="nameGroupTest"
                variant="filled"
                error={Boolean(
                  formik.touched.nameGroupTest && formik.errors.nameGroupTest
                )}
                value={formik.values?.nameGroupTest}
                onChange={handleNameGroupTestChange}
              />
              <p className="text-red-700">
                {formik.touched.nameGroupTest && formik.errors.nameGroupTest
                  ? formik.errors.nameGroupTest
                  : null}
              </p>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{ borderRadius: "0px 5px 5px 0px" }}
                type="submit"
                color="secondary"
                variant="contained"
                className="h-[50px] flex align-middle"
              >
                <Typography component="span" variant="caption">
                  ساخت گروه
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default FormGroupTests;
