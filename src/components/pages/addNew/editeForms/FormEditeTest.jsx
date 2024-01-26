import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import MyContext from "../../../../context";
import { CreateTestValidation } from "../../../../validations/CreateTestValidation.js";
import { getTests, updateTests } from "../../../services/allServices";

const FormEditeTest = () => {
  const notify = () =>
    toast.success("با موفقیت انجام شد 👍", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: false,
    });

  const { tests, groupTests, setTests, indexDataTests } = useContext(MyContext);

  const [state, setState] = useState({
    inputQuestFormik: {},
  });

  const inputQuestFormik = {
    nameTest: "",
    nameTeacherTest: "",
    timeTest: "",
    categoryTest: "",
  };
  const lastIndex = tests.length - 1;
  const lastValue = tests[lastIndex].id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: TestData } = await getTests(
          indexDataTests !== 0 ? indexDataTests : lastValue
        );

        setState({
          ...state,
          inputQuestFormik: TestData,
        });
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    formik.setValues(state.inputQuestFormik);
  }, [state]);

  const formik = useFormik({
    initialValues: inputQuestFormik,
    onSubmit: (values) => {
      // updateTests(indexDataTests , values )
      submitForm(values);
      formik.resetForm();
    },
    validationSchema: CreateTestValidation,
  });

  const submitForm = async (values) => {
    try {
      const { data, status } = await updateTests(indexDataTests, values);
      if (status === 200) {
        toast.success("مخاطب با موفقیت ویرایش شد", { icon: "✅" });
        setTests((draft) => {
          const GroupTestIndex = draft.findIndex(
            (c) => c.id === indexDataTests
          );
          draft[GroupTestIndex] = { ...data };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(groupTests);
  return (
    <Box elevation={3} className="p-5">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="large"
              color="secondary"
              label="نام آزمون"
              name="nameTest"
              variant="filled"
              error={Boolean(formik.touched.nameTest && formik.errors.nameTest)}
              value={formik.values?.nameTest}
              onChange={formik.handleChange}
            />
            <p className="text-red-700">
              {formik.touched.nameTest && formik.errors.nameTest
                ? formik.errors.nameTest
                : null}
            </p>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="large"
              color="secondary"
              label="نام دبیر"
              defaultValue={"test?"}
              name="nameTeacherTest"
              variant="filled"
              error={Boolean(
                formik.touched.nameTeacherTest && formik.errors.nameTeacherTest
              )}
              value={formik.values?.nameTeacherTest}
              onChange={formik.handleChange}
            />
            <p className="text-red-700">
              {formik.touched.nameTeacherTest && formik.errors.nameTeacherTest
                ? formik.errors.nameTeacherTest
                : null}
            </p>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="timeTest" id="demo-simple-select-label">
                زمان آزمون
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="timeTest"
                value={formik.values?.timeTest}
                label="زمان آزمون"
                name="timeTest"
                color="secondary"
                onChange={formik.handleChange}
                variant="filled"
                error={Boolean(
                  formik.touched.timeTest && formik.errors.timeTest
                )}
              >
                <MenuItem value={2}>2 دقیقه</MenuItem>
                <MenuItem value={5}>5 دقیقه</MenuItem>
                <MenuItem value={8}>8 دقیقه</MenuItem>
                <MenuItem value={10}>10 دقیقه</MenuItem>
                <MenuItem value={15}>15 دقیقه</MenuItem>
                <MenuItem value={20}>20 دقیقه</MenuItem>
              </Select>
            </FormControl>
            <p className="text-red-700">
              {formik.touched.timeTest && formik.errors.timeTest
                ? formik.errors.timeTest
                : null}
            </p>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="categoryTest">دسته بندی آزمون</InputLabel>
              <Select
                id="categoryTest"
                value={formik.values.categoryTest}
                label="دسته بندی آزمون"
                name="categoryTest"
                color="secondary"
                onChange={formik.handleChange}
                variant="filled"
                error={Boolean(
                  formik.touched.categoryTest && formik.errors.categoryTest
                )}
              >
                {groupTests.map((data) => (
                  <MenuItem key={data.id} value={data.nameGroupTest}>
                    {data.nameGroupTest}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <p className="text-red-700">
              {formik.touched.categoryTest && formik.errors.categoryTest
                ? formik.errors.categoryTest
                : null}
            </p>
          </Grid>
        </Grid>

        <Button
          fullWidth
          sx={{ mt: 3 }}
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<SendIcon />}
        >
          <Typography variant="button">ساختن آزمون</Typography>
        </Button>
      </form>
    </Box>
  );
};

export default FormEditeTest;
