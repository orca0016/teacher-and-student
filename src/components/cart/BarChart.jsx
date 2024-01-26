import * as React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';

export default function BarChartC() {

  const [itemNb, setItemNb] = React.useState(5);
//   const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };

  const Tableau10 = [
      '#8D14E5',
      '#edc949',
      '#76b7b2',  
      '#e15759',
      '#ea489b',
      '#59a14f',
      '#ff9da7',
    '#4e79a7',

  ];
  return (
    <Box sx={{ width: '100%' , px : "50px" }} >
      <BarChart
        colors={Tableau10}
        height={300}
        series={series
          .slice(0, 2)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        skipAnimation={false}
      />
      {/* <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
        }
        label="skipAnimation"
        labelPlacement="end"
      /> */}
      <Typography id="input-item-number" gutterBottom>
        کنترل نمایش اطلاعات
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      />
    </Box>
  );
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
};

const series = [
  {
    label: 'سوال های درست جواب داده شده ',
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
  {
    label: 'سوال های غلط جواب داده شده',
    data: [
      2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862, 2446,
      910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },

].map((s) => ({ ...s, highlightScope }));