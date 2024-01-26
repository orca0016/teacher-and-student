import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import MyContext from "../../context";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import Zoom from "@mui/material/Zoom";
import * as React from "react";
import { useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { set } from "lodash";


const ShowQuestions = () => {
  const { tests } = useContext(MyContext);
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(1);
  const [run, setRun] = useState(false);
  const loadingDivRef  = React.useRef(null)
  const navigate = useNavigate();

  useEffect(() => {
    setChecked((prev) => !prev);

    return () => {
      setChecked((prev) => !prev);
    };
  }, []);
  const [offset, setOffset] = useState({ top: 0, left: 0 });

  const handleDivClick = (event , dataId) => {
    // دریافت مختصات موقعیت کلیک
    const clickX = event.clientX;
    const clickY = event.clientY;
    // نمایش مختصات در کنسول
    console.log(`Clicked at: X=${clickX}, Y=${clickY}`);
    
    // ذخیره کردن مختصات در استیت
    setOffset({ top: clickY, left: clickX });
    setRun((prev)=> !prev)
    setTimeout(()=> navigate(`/exam/${index}`)  , 1400)
  };


useEffect(() => {
  const calculateOffset = () => {
    if (loadingDivRef.current) {
      const rect = loadingDivRef.current.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setOffset({ top: rect.top + scrollTop, left: rect.left + scrollLeft });
    }
  };

  // window.addEventListener('scroll', calculateOffset);
  window.addEventListener('resize', calculateOffset);

  calculateOffset();

  return () => {
    // window.removeEventListener('scroll', calculateOffset);
    window.removeEventListener('resize', calculateOffset);
  };
}, []);

  return (
    <>
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      /> */}
      <Divider variant="middle" color={"#f5209c"} sx={{borderColor:"#f5209c" ,borderWidth:"1px", mb: 2}}>
        <Typography variant="h3" >آزمون ها</Typography>
      </Divider>
      <Grid container spacing={1} className="min-h-[80vh]">
        {tests.map((data) => (
          <Grid
          key={data.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            className="flex justify-center max-h-[220px]"
          >
            <Zoom
              in={checked}
              style={{ transitionDelay: checked ? 100 : "0ms" }}
            >
              <Card sx={{width:"100%" ,  minWidth: 200, mb: 3 }}>
                <CardContent>
                    <div className="text-xl mb-3">
                    <b>نام آزمون:</b> {data.nameTest}
                    </div>
                  <Typography
                    sx={{ mb: 1.5, fontSize: 14 }}
                    color="text.secondary"
                  >
                    <b>نام طراح :</b> {data.nameTeacherTest}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   <b> زمان آزمون :</b> {data.timeTest} دقیقه
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" onMouseMove={()=> setIndex(data.id)} onClick={handleDivClick} size="small">شروع آزمون </Button>
                </CardActions>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
      <div ref={loadingDivRef } style={{display: run? "block" : "none" , top: offset.top-100 , left:offset.left-20}} className="loadingDiv fixed w-5 h-5 bg-slate-50 top-0 left-0"></div>
    </>
  );
};

export default ShowQuestions;
