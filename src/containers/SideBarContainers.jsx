import { Box, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SideBarData } from "../constants/sidebarData";
const SideBarContainers = () => {
  const [retrievedValue, setRetrievedValue] = useState({
    username: "",
    isStudent: null,
  });
  useEffect(() => {
    setRetrievedValue(JSON.parse(localStorage.getItem("key")));
  }, []);
  const evenNumbers = SideBarData.filter((obj) => Boolean(obj.student));

  const address = [
    "dashboard",
    "TestQuestions",
    "addMore",
    "exam",
    "5",
    "6",
    "7",
  ];

  return (
    <>
      <Grid item xs={1}>
        <Box sx={{ backgroundColor: "white", height: "calc(100% - 20px)" }}>
          {!retrievedValue.isStudent
            ? SideBarData.map(({ id, icon, title }) => {
                return (
                  <div
                    key={id}
                    className="flex flex-col items-center my-3 text-center "
                  >
                    <NavLink
                      to={`/${address[id-1]}`}
                      style={({ isActive }) => {
                        return {
                          display: "block",
                          margin: "2px",
                          Transition: "1.2s",
                          scale: isActive ? "1.5" : "",
                        };
                      }}
                    >
                      <img
                        src={icon}
                        className="avatar"
                        style={{ width: 24, height: 24, color: "primary.main" }}
                      />
                    </NavLink>
                    <Typography variant="overline" color={"primary.main"}>
                      {title}
                    </Typography>
                  </div>
                );
              })
            : evenNumbers.map(({ id, icon, title }) => {
                return (
                  <div
                    key={id}
                    className="flex flex-col items-center my-3 text-center "
                  >
                    <NavLink
                     to={`/${address[id-1]}`}
                      style={({ isActive }) => {
                        return {
                          display: "block",
                          margin: "2px",
                          Transition: "1.2s",
                          scale: isActive ? "1.5" : "",
                        };
                      }}
                    >
                      <img
                        src={icon}
                        className="avatar"
                        style={{ width: 24, height: 24, color: "primary.main" }}
                      />
                    </NavLink>
                    <Typography variant="overline" color={"primary.main"}>
                      {title}
                    </Typography>
                  </div>
                );
              })}
        </Box>
      </Grid>
    </>
  );
};

export default SideBarContainers;
