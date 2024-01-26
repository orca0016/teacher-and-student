import * as React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';



import {Box ,Typography ,Tab , Tabs , AppBar} from "@mui/material"
import FormGroupTests from './pages/addNew/FormGroupTests';
import FormCreateTest from './pages/addNew/FormCreateTest';
import FormCreateQuestion from './pages/addNew/FormCreateQuestion';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
    {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AddNewTabPannel() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper'}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="مدیریت دسته بندی" {...a11yProps(0)} />
          <Tab label="مدیریت آزمون ها" {...a11yProps(1)} />
          <Tab label="مدیریت سوال ها " {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <FormGroupTests />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FormCreateTest/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <FormCreateQuestion/>
        </TabPanel>
      {/* </SwipeableViews> */}
    </Box>
  );
}

        