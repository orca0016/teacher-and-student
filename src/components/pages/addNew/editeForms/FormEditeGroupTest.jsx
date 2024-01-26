import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import MyContext from "../../../../context";

import { ValidationGroupTestsEdite } from "../../../../validations/edite/ValidationGroupTest";
import {
  updateGroupTests,
  getGroupTests
} from "../../../services/allServices";

const FormEditeGroupTest = () => {

  const { indexDataGroupTests, groupTests, setGroupTests } =useContext(MyContext);
  const inputGroup = {
    nameGroupTest:"",
    id: indexDataGroupTests,
  };
  const [state, setState] = useState({
    inputGroup: {},
  });


  const lastIndex = groupTests.length - 1;
  const lastValue = groupTests[lastIndex].id;
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const { data: GroupData } = await getGroupTests(indexDataGroupTests !== 0  ? indexDataGroupTests :  lastValue);

        setState({
          ...state,
          inputGroup: GroupData,
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    
    fetchData();
  }, []);
  useEffect(()=>{
    formik.setValues(state.inputGroup)

  },[state])

  const formik = useFormik({
    initialValues: inputGroup,
    onSubmit: (values) => {
      submitForm(values);
      formik.resetForm();
    },
    validationSchema: ValidationGroupTestsEdite,
  });
  const submitForm = async (values) => {
    try {
      const { data, status } = await updateGroupTests(
        indexDataGroupTests,
        values
      );
      if (status === 200) {
        toast.success("مخاطب با موفقیت ویرایش شد", { icon: "✅" });
        setGroupTests((draft) => {
          const GroupTestIndex = draft.findIndex(
            (c) => c.id === indexDataGroupTests
          );
          draft[GroupTestIndex] = { ...data };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className="px-5">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
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
              onChange={formik.handleChange}
            />
            <p className="text-red-700">
              {formik.touched.nameGroupTest && formik.errors.nameGroupTest
                ? formik.errors.nameGroupTest
                : null}
            </p>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              sx={{ borderRadius: " 0px 0px 5px 5px" }}
              type="submit"
              color="secondary"
              variant="contained"
              className="h-[30px] flex align-middle"
            >
              <Typography component="span" variant="caption">
                 ویرایش گروه
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default FormEditeGroupTest;
