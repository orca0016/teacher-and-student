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
import ConfirmDeleteGroup from "../../confirmDeleteGroupTest";

import MyContext from "../../../context";
import DialogFormEdite from "./editeForms/DialogFormEdite";

const TableGroupTests = React.memo(() => {
  const { groupTests } = useContext(MyContext);

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
              <StyledTableCell align="left">اسم دسته بندی</StyledTableCell>
              <StyledTableCell align="left"> ادیت کردن </StyledTableCell>
              <StyledTableCell align="left">پاک کردن این گروه</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {groupTests
              ? groupTests.map((data, index) => (
                  <StyledTableRow key={data.id}>
                    <StyledTableCell className="text-center">
                      {index}
                    </StyledTableCell>
                    <StyledTableCell className="text-center">
                      {data.nameGroupTest}
                    </StyledTableCell>
                    <StyledTableCell className="text-center">
                      <span style={{ color: "#44475a" }}>
                        <DialogFormEdite
                          index={data.id}
                          nameComponentEdite="groupTest"
                        />
                      </span>
                    </StyledTableCell>
                    <StyledTableCell className="text-center">
                      <ConfirmDeleteGroup
                        idGroupTestsDelete={data.id}
                        nameGroupTest={data.nameGroupTest}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
});

export default TableGroupTests;
