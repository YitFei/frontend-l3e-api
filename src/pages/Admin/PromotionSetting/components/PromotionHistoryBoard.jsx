import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { makeStyles } from "@material-ui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const promotionColumnName = [
  "優惠碼",
  "優惠期限",
  "優惠額度(RM)",
  "狀態",
  "終止優惠",
];

export default function PromotionHistoryBoard(props) {
  const [enable, setEnable] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Grid container columns={{ xs: 12 }}>
      <Grid item xs={12} sx={{ border: 0, width: 1 }}>
        {" "}
        <Typography align="center">查看優惠記錄</Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {promotionColumnName.map((item, index) => {
                  const align = index === 0 ? "left" : "right";
                  return <TableCell align={align}>{item}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.promoCode}
                  </TableCell>
                  <TableCell align="right">{row.expiredDate}</TableCell>
                  <TableCell align="right">{row.discountAmt}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>

                  <TableCell align="right">
                    <Button disabled={false}>{row.action}</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
