import { CreateRounded, DeleteForeverRounded } from "@mui/icons-material";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";

import MyContext from "../../../context";

import ConfirmDeleteTest from "../../confirmDeleteTest";
import DialogFormEdite from "./editeForms/DialogFormEdite";
const TableTests = React.memo(() => {
  const { tests, setIndexDataTests } = useContext(MyContext);
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

  return (
    <>
      <TableContainer component={Box} sx={{ mt: "20px", maxHeight: 340 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>شماره </StyledTableCell>
              <StyledTableCell align="left">اسم امتحان</StyledTableCell>
              <StyledTableCell align="left">
                {" "}
                اسم طرح کننده سوال{" "}
              </StyledTableCell>
              <StyledTableCell align="left">زمان آزمون </StyledTableCell>
              <StyledTableCell align="left">دسته بندی</StyledTableCell>
              <StyledTableCell align="left"> ویرایش کردن </StyledTableCell>
              <StyledTableCell align="left">پاک کردن </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Array.isArray(tests) &&
              tests.map((data, index) => (
                <StyledTableRow key={data.id}>
                  <StyledTableCell className="text-center">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell className="text-center">
                    {data.nameTest}
                  </StyledTableCell>
                  <StyledTableCell className="text-center">
                    {data.nameTeacherTest}
                  </StyledTableCell>
                  <StyledTableCell className="text-center">
                    {data.timeTest}
                  </StyledTableCell>
                  <StyledTableCell className="text-center">
                    {data.categoryTest}
                  </StyledTableCell>
                  <StyledTableCell className="text-center">
                    <span style={{ color: "#44475a" }}>
                    <DialogFormEdite index={data.id} nameComponentEdite="test"nameEdite={data.nameTest}
                          object={data[data.id]}/>
                  </span>
                  </StyledTableCell>
                  <StyledTableCell className="text-center">
                    <ConfirmDeleteTest
                      idTestDelete={data.id}
                      nameTest={data.nameTest}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
});

export default TableTests;
