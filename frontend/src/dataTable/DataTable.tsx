import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Heading } from "../form/components/heading/Heading";
import FormUtils from "../form/utils/FormUtils";

export default function DataTable() {
  const dummyData: FormUtils.IForm[] = [
    {
      name: "John Doe",
      age: 25,
      city: "New York",
      address: "123 Main St",
      postcode: "12345",
    },
  ];

  return (
    <>
      <Heading variant="h3">Stored Data</Heading>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(dummyData[0]).map((key) => (
                <TableCell key={key}>{key.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((data, index) => (
              <TableRow key={index}>
                {Object.values(data).map((value, index) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
