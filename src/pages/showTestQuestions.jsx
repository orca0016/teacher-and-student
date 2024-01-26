import { CreateRounded, DeleteForeverRounded } from "@mui/icons-material";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

import ConfirmDeleteQuestion from "../components/ConfirmDeletequestion";
import MyContext from "../context";
import DialogFormEdite from "../components/pages/addNew/editeForms/DialogFormEdite";
// import ConfirmDeleteQuestion from "../components/ConfirmDeleteQuestion";

const ShowTestQuestions = () => {
  const { testQuestions,setIndexDataQuestion } = useContext(MyContext);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: "1px solid black #bd93f9",
    },
  }));
  console.log(testQuestions);
  return (
    <>
      <TableContainer component={Box} sx={{ mt: "20px", maxHeight: 540 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>شماره ازمون </StyledTableCell>
              <StyledTableCell align="left">ازمون</StyledTableCell>
              <StyledTableCell align="left">دسته بندی </StyledTableCell>
              <StyledTableCell align="left">گزینه اول </StyledTableCell>
              <StyledTableCell align="left">گزینه دوم </StyledTableCell>
              <StyledTableCell align="left">گزینه سوم </StyledTableCell>
              <StyledTableCell align="left">گزینه چهارم </StyledTableCell>
              <StyledTableCell align="left">گزینه درست </StyledTableCell>
              <StyledTableCell align="left">ویرایش </StyledTableCell>
              <StyledTableCell align="left">پاک کردن </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {testQuestions.map((data, index) => (
              <StyledTableRow key={data.id}>
                <StyledTableCell className="text-center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell className="text-center">
                  {data.nameQuestion}
                </StyledTableCell>
                <StyledTableCell className="text-center">
                  {data.nameCategory}
                </StyledTableCell>
                <StyledTableCell className="text-center">
                  <Typography
                    sx={{
                      color: data.trueQuestion === data.options[0] ? "#00C853" : "red",
                    }}
                  >
                    {data.options[0]}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell className="text-center">
                  <Typography
                    sx={{
                      color: data.trueQuestion === data.options[1] ? "#00C853" : "red",
                    }}
                  >
                    {data.options[1]}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell className="text-center">
                  <Typography
                    sx={{
                      color: data.trueQuestion == data.options[2] ? "#00C853" : "red",
                    }}
                  >
                    {data.options[2]}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell className="text-center">
                  <Typography
                    sx={{
                      color: data.trueQuestion == data.options[3] ? "#00C853" : "red",
                    }}
                  >
                    {data.options[3]}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell className="text-center">
                  {data.trueQuestion}
                </StyledTableCell>
                <StyledTableCell className="text-center">
                  <span style={{ color: "#44475a" }}>
                    <DialogFormEdite index={data.id}  nameComponentEdite="question"/>
                  </span>
                </StyledTableCell>
                <StyledTableCell className="text-center">
                  <ConfirmDeleteQuestion
                    idQuestion={data.id}
                    nameQuestion={data.nameQuestion}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowTestQuestions;
