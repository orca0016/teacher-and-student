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
  import { useContext, useEffect, useRef, useState } from "react";
  import { toast } from "react-toastify";
  import MyContext from "../../../../context";
  import { ValidationsQuestions } from "../../../../validations/ValidationsQuestions";
  import { getQuestions, updateQuestions } from "../../../services/allServices";
  
  const FormEditeQuest = () => {
    const { testQuestions, setTestQuestions,indexDataQuestion, tests, groupTests, setTests  } = useContext(MyContext);

   const inputQuestFormik = {
    nameQuestion: "",
    nameCategory: "",
    options: ["", "", "", ""], 
    trueQuestion: "",
  };
    const [state, setState] = useState({
      inputQuestFormik: {},
    });
  
  
    const lastIndex = testQuestions.length - 1;
    const lastValue = testQuestions[lastIndex].id;
    
    useEffect(() => {
  
      const fetchData = async () => {
        try {
          const { data: QuestionData } = await getQuestions(indexDataQuestion !== 0  ? indexDataQuestion :  lastValue);
  
          setState({ inputQuestFormik: QuestionData });
        } catch (err) {
          console.log(err.message);
        }
      };
      
      fetchData();
    }, []);
    useEffect(() => {
      if (state.inputQuestFormik) {
        formik.setValues(state.inputQuestFormik);
      }
    }, [state.inputQuestFormik]); 

    const submitedForm = async(values)=>{
      try {
        const { data, status } = await updateQuestions(indexDataQuestion , values);
  
        if (status === 200) {    
          toast.success("مخاطب با موفقیت ویرایش شد", { icon: "✅" });
  
          setTestQuestions((draft) => {
            const contactIndex = draft.findIndex(
              (c) => c.id === parseInt(indexDataQuestion)
            );
            draft[contactIndex] = {...data};
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    const formik = useFormik({
      initialValues: inputQuestFormik,
      onSubmit: (values) => {
        submitedForm(values);
        formik.resetForm();
      },
      validationSchema: ValidationsQuestions,
    });

    const handleOptionChange = (index, event) => {
      const newOptions = [...formik.values.options];
      newOptions[index] = event.target.value;
      formik.setFieldValue('options', newOptions);
    };
  
    const handleNameGroupTestChange = (event) => {
      formik.handleChange(event);
    };
    return (
      <>
         <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ direction: "ltr", mb: "5px" }}
            >
              <TextField
                fullWidth
                size="large"
                color="secondary"
                label="تایتل سوال"
                name="nameQuestion"
                variant="filled"
                error={Boolean(
                  formik.touched.nameQuestion && formik.errors.nameQuestion
                )}
                value={formik.values?.nameQuestion}
                onChange={handleNameGroupTestChange}
              />
              <p className="text-red-700">
                {formik.touched.nameQuestion && formik.errors.nameQuestion
                  ? formik.errors.nameQuestion
                  : null}
              </p>
            </Grid>

            {/* Other inputs... */}
            {formik.values.options && formik.values.options.map((option, index) => (
              <Grid
                item
                key={index}
                xs={11}
                sm={6}
                md={6}
                lg={6}
                sx={{ direction: "ltr" }}
              >
                <TextField
                  fullWidth
                  size="small"
                  color="success"
                  label={`گزینه شماره ${index + 1}`}
                  name={`options[${index}]`}
                  variant="filled"
                  error={
                    formik.touched.options &&
                    formik.errors.options &&
                    Boolean(formik.errors.options[index])
                  }
                  value={option}
                  onChange={(event) => handleOptionChange(index, event)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.options &&
                  formik.errors.options &&
                  formik.errors.options[index] && (
                    <div>{formik.errors.options[index]}</div>
                  )}
              </Grid>
            ))}

            {/* Rest of the form... */}
            <Grid
              item
              xs={11}
              sm={6}
              md={6}
              lg={6}
              sx={{ direction: "ltr", mt: "10px" }}
            >
              <FormControl fullWidth>
                <InputLabel htmlFor="trueQuestion">
                  گزینه درست را انتخاب کنید
                </InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  id="trueQuestion"
                  value={formik.values?.trueQuestion}
                  label="گزینه درست را انتخاب کنید"
                  name="trueQuestion"
                  color="secondary"
                  onChange={handleNameGroupTestChange}
                  variant="filled"
                  error={Boolean(
                    formik.touched.trueQuestion && formik.errors.trueQuestion
                  )}
                >
                  <MenuItem value={formik.values.options}>
                    گزینه شماره ۱
                  </MenuItem>
                  <MenuItem value={formik.values.options}>
                    گزینه شماره ۲
                  </MenuItem>
                  <MenuItem value={formik.values.options}>
                    گزینه شماره ۳
                  </MenuItem>
                  <MenuItem value={formik.values.options}>
                    گزینه شماره ۴
                  </MenuItem>
                </Select>
              </FormControl>
              <p className="text-red-700">
                {formik.touched.trueQuestion && formik.errors.trueQuestion
                  ? formik.errors.trueQuestion
                  : null}
              </p>
            </Grid>
            <Grid
              item
              xs={11}
              sm={6}
              md={6}
              lg={6}
              sx={{ direction: "ltr", mt: "10px" }}
            >
              <FormControl fullWidth>
                <InputLabel htmlFor="nameCategory">
                  نام آزمون را انتخاب کنید
                </InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  id="nameCategory"
                  value={formik.values?.nameCategory}
                  label="نام آزمون را انتخاب کنید "
                  name="nameCategory"
                  color="secondary"
                  onChange={handleNameGroupTestChange}
                  variant="filled"
                  error={Boolean(
                    formik.touched.nameCategory && formik.errors.nameCategory
                  )}
                >
                  {tests.map((data) => (
                    <MenuItem key={data.id} value={data.nameTest}>
                      {data.nameTest}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <p className="text-red-700">
                {formik.touched.nameCategory && formik.errors.nameCategory
                  ? formik.errors.nameCategory
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
          >
            <Typography variant="button">ساختن امتحان </Typography>
          </Button>
        </CardActions>
      </form>
      </>
    );
  };
  
  export default FormEditeQuest;
  