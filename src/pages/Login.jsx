import { Avatar, Box, Typography,Grid } from "@mui/material";
import LoginForm from "../components/pages/loginForm";
import LoginContaienr from "../containers/LoginContaienr";

// import {useCallback } from "react";






import {LoginRounded} from '@mui/icons-material';
import { pink } from "@mui/material/colors";


const Login = () => {


  return (
    <>
          <LoginContaienr>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={5} >
              <Box className="w-full  h-full">
                <div className="flex flex-col items-center justify-center w-full h-full px-1 py-2">
                    <Avatar  sx={{ bgcolor: pink[500] }}>
                        <LoginRounded/>
                    </Avatar>
                    <Typography>
                            ورود به سایت 
                    </Typography>
                  <LoginForm />
                </div>
              </Box>
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8} xl={7}>
              <Box className="w-full bg-slate-800 h-full back-login-pic">
              {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            /> */}
              </Box>
            </Grid>
          </LoginContaienr>
    </>
      
  );
};

export default Login;
