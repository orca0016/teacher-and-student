import {Grid} from '@mui/material'

const LoginContaienr = ({children}) => {
  return (
    <>
        <Grid container height={"100vh"}>
            {children}
        </Grid>
    </>
  )
}

export default LoginContaienr