import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { DataContext } from "../context/dataProvider/DataContext";
import { Heading } from "../form/components/heading/Heading";
import { TxtBtn } from "../form/components/styledButton/StyledButton";
import FormUtils from "../form/utils/FormUtils";
import APICaller from "../utils/ApiCaller";

export default function DataTable() {
  const { users, fetchAndSetUsers, setItemToEdit } =
    useContext(DataContext);

  async function handleDelete(userId: number): Promise<void> {
    await APICaller.deleteUser(userId);
    await fetchAndSetUsers();
  }

  async function handleEdit(item: FormUtils.IForm): Promise<void> {
    setItemToEdit(item);
  }

  return (
    <>
      <Heading variant="h3">Stored Data</Heading>
      <TableContainer component={Paper} elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              {[
                "ID",
                "NAME",
                "AGE",
                "CITY",
                "ADDRESS",
                "POSTCODE",
                "DEL",
                "EDIT",
              ].map((item, index) => (
                <TableCell key={index}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.postcode}</TableCell>
                <TableCell>
                  <TxtBtn
                    color="error"
                    fontWeight="bold"
                    onClick={() => handleDelete(item.id)}
                  >
                    DEL
                  </TxtBtn>
                </TableCell>
                <TableCell>
                  <TxtBtn
                    color="orange"
                    fontWeight="bold"
                    onClick={() => handleEdit(item)}
                  >
                    EDIT
                  </TxtBtn>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
