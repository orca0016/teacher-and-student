import { Box, Paper, Typography } from "@mui/material";
import BarChartC from "../components/cart/BarChart";

const Dashboard = () => {
  return (
    <>
      <Box className="w-full h-full">
        <BarChartC />
        <Box className="w-full flex justify-center gap-6">
        <Paper elevation={6} className="w-[45%] h-[150px] p-2">
            <Typography variant="subtitle2">
              سوالاتی که تا کنون درست  جواب دادید{" "}
            </Typography>
            <Typography variant="h1" className="text-green-600 text-center">
             ۱۰۰
            </Typography>
          </Paper>
          <Paper elevation={6} className="w-[45%] h-[150px] p-2">
            <Typography variant="subtitle2">
              سوالاتی که تا کنون اشتباه جواب دادید{" "}
            </Typography>
            <Typography variant="h1" className="text-red-600 text-center">
              ۵۰
            </Typography>
          </Paper>
        </Box>
      </Box>
      <notify/>
    </>
  );
};

export default Dashboard;
