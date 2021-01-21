import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "../../components/Button";
import API from "../../utils/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "24px auto",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
}));

export default function SimpleTable(props) {
  const [convertData, setData] = useState(null);

  useEffect(() => {
    API.getHistory()
      .then((data) => setData(data.data.length > 0 ? data.data : null))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => console.log(convertData), [convertData]);

  const classes = useStyles();

  const handleUpdate = (row) => {
    console.log(props);
    props.history.push(
      `/curency-converter?amount=${row.quantity}&rate=${row.conversion_rate}&calculated=${row.calculated_amount}&from=${row.from}&to=${row.to}&id=${row.id}`
    );
    console.log("updated");
  };

  const handleDelete = (row) => {
    API.deletRow(row).then(data => {
      let original = Array.from(Object.create(convertData));
      for (let i in original) {
        if (original[i].id === row.id) {
          original.splice(i, 1);
        }
      }
      if (original.length >= 1) {
        setData(original);
      } else {
        setData(null);
      }
    });
  };

  return (
    <Paper className={classes.root}>
      {convertData ? (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Original Amount</TableCell>
              <TableCell align="right">Conversion Rate</TableCell>
              <TableCell align="right">Calculated Amount</TableCell>
              <TableCell align="right">From</TableCell>
              <TableCell align="right">To</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {convertData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.quantity}
                </TableCell>
                <TableCell align="right">{row.conversion_rate}</TableCell>
                <TableCell align="right">{row.calculated_amount}</TableCell>
                <TableCell align="right">{row.from}</TableCell>
                <TableCell align="right">{row.to}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleUpdate(row)} color="blue">
                    Update
                  </Button>
                  <Button onClick={() => handleDelete(row)} color="red">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <h2>Nothing Found!</h2>
      )}
    </Paper>
  );
}
