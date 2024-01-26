import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useContext, useRef } from "react";
import { toast } from "react-toastify";
import MyContext from "../../../context";
import { CreateTestValidation } from "../../../validations/CreateTestValidation";
import { createTests } from "../../services/allServices";
import TableTests from "./TableTests";

const FormCreateTest = () => {
  const fieldUser = useRef(null);
  const fieldPass = useRef(null);
  const { tests, setTests, groupTests } = useContext(MyContext);
  const notify = () =>
    toast.success("امتحان جدیدت ساخته شد ✔", {
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

  const inputQuestFormik = {
    nameTest: "",
    nameTeacherTest: "",
    timeTest: "",
    categoryTest: "",
  };

  const formik = useFormik({
    initialValues: inputQuestFormik,
    onSubmit: (values) => {
      createTests(values);
      setTests([...tests, values]);
      notify();
      formik.resetForm();
    },
    validationSchema: CreateTestValidation,
  });
  console.log("test");
  return (
    <>
      <TableTests />

      <Typography variant="h5"  sx={{mt:3}} className="text-gray-600">
        یک امتحان جدید بسازید .
      </Typography>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={11} sm={6} md={6} lg={6} sx={{ direction: "ltr" }}>
              <TextField
                fullWidth
                ref={fieldUser}
                size="large"
                color="secondary"
                label=" نام ازمون"
                name="nameTest"
                variant="filled"
                error={Boolean(
                  formik.touched.nameTest && formik.errors.nameTest
                )}
                value={formik.values?.nameTest}
                onChange={formik.handleChange}
              />
              <p className="text-red-700">
                {formik.touched.nameTest && formik.errors.nameTest
                  ? formik.errors.nameTest
                  : null}
              </p>
            </Grid>

            <Grid item xs={11} sm={6} md={6} lg={6} sx={{ direction: "ltr" }}>
              <TextField
                fullWidth
                ref={fieldPass}
                size="large"
                color="secondary"
                label="نام دبیر"
                name="nameTeacherTest"
                variant="filled"
                error={Boolean(
                  formik.touched.nameTeacherTest &&
                    formik.errors.nameTeacherTest
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

            <Grid item xs={11} sm={6} md={6} lg={6} sx={{ direction: "ltr" }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="timeTest" id="demo-simple-select-label">
                  زمان ازمون{" "}
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="timeTest"
                  value={formik.values?.timeTest}
                  label="زمان آزمون "
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

            <Grid item xs={11} sm={6} md={6} lg={6} sx={{ direction: "ltr" }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="categoryTest">دسته بندی آزمون </InputLabel>
                <Select
                  id="categoryTest"
                  value={formik.values.categoryTest}
                  label="دسته بندی آزمون  "
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
        </CardContent>
        <CardActions sx={{ alignItems: "end", flexDirection: "column" }}>
          <Button
            fullWidth
            sx={{ mt: 3 }}
            type="submit"
            color="secondary"
            variant="contained"
            startIcon={<SendIcon />}
          >
            <Typography variant="button">ساختن امتحان </Typography>
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default FormCreateTest;
