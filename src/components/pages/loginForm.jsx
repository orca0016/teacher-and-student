import { Face6Rounded, VpnKeyRounded } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
  Grid
} from "@mui/material";

import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { LoginValidationSchema } from "../../validations/LoginValidation";
import { useRef } from "react";
import {  toast } from "react-toastify";

const LoginForm = () => {
  const fieldUser = useRef(null)
  const fieldPass = useRef(null)
  const navigat = useNavigate();


  
  const notify = () => toast.success("خوش اومدی :)",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon:false
    });
  
  const contactInputNames = {
    userName: "",
    password: "",
  };
  const formik = useFormik({
    
    initialValues: contactInputNames,
    onSubmit: (values) => {
      if (values.userName === "teacher" && values.password === "123") {
        notify();
        localStorage.setItem('key' , JSON.stringify({username:"teacher" , isStudent: false}));
        setTimeout(()=> navigat("/")  , 100)
      }else if(values.userName === "student" && values.password === "321"){
          notify();
          localStorage.setItem('key' , JSON.stringify({username:"student" , isStudent: true}));
          setTimeout(()=> navigat("/")  , 100)
        

      }
    },
    validationSchema: LoginValidationSchema,
  });
  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ direction: "ltr" }}>
              <TextField
                fullWidth
                ref={fieldUser}
                size="large"
                color="secondary"
                label=" نام کاربری خود را وارد کنید *"
                name="userName"
                variant="outlined"
                helperText={
                  formik.touched.userName ? formik.errors.userName : null
                }
                error={Boolean(
                  formik.touched.userName && formik.errors.userName
                )}
                value={formik.values?.userName}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Face6Rounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ direction: "ltr" }}>
              <TextField
                fullWidth
                ref={fieldPass}
                size="large"
                color="secondary"
                label="رمز عبور خود را وارد کنید  *"
                name="password"
                variant="outlined"
                helperText={
                  formik.touched.password ? formik.errors.password : null
                }
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                value={formik.values?.password}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VpnKeyRounded />
                    </InputAdornment>
                  ),
                }}
              />
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
            <Typography variant="button">ورود </Typography>
          </Button>
        </CardActions>
      </form>
      <Grid container spacing={10}>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="caption" className="w-full">
            رمز خود را فراموش کردید ؟
          </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="caption" className="w-full">
            هنوز اکانت ندارید ؟
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
