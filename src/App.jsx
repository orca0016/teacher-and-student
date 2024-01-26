import { Box, Typography ,Grid } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import PagesContainers from "./containers/PagesContainers";
import SideBarContainers from "./containers/SideBarContainers";
import { useNavigate } from 'react-router-dom';
// import MainLayout from "./layouts/Main

const App = () => {
  // const [loginData, setLoginData] = useState({ username: "", isStudent: null });

  const navigate = useNavigate();
  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem("key"));
    if(!localStorageData){
      console.log("پیدا نشد ");
      localStorage.setItem("key",JSON.stringify({ username: "", isStudent: null }));  
      setTimeout(() => {
        navigate('/login');
      },100)
    }else if(localStorageData.username === "" && localStorageData.isStudent === null){
      setTimeout(() => {
        navigate('/login');
      },100)

    }

  },[history])


  return (
    <>
      <Grid  container width={"100%"} height={"100%"}>
        <Grid item height={"80px"} xs={12} >
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Grid container height={"calc(100vh - 80px)"}>
            <SideBarContainers />
            <PagesContainers>
              <Outlet />
            </PagesContainers>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
