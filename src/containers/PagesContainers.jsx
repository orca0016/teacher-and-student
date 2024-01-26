import { Box ,Grid} from "@mui/material";

const PagesContainers = ({ children }) => {
  return (
    <>
      <Grid
      item
        sx={{
          boxShadow: "inset 0 25px 50px -12px rgb(0 0 0 / 0.25)",
          backgroundColor: "whitesmoke",
          padding: "1em",
        }}
        xs
      >
        <Box className="drop-shadow-xl">
          {children}
          </Box>
      </Grid>
    </>
  );
};

export default PagesContainers;
