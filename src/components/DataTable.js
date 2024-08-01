import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 110 },
  { field: "email", headerName: "Email", width: 200 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    email: "jon.snow@winterfell.com",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    email: "cersei.lannister@kingdom.com",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    email: "jaime.lannister@kingdom.com",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    email: "arya.stark@winterfell.com",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 29,
    email: "daenerys.targaryen@dragons.com",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Red Priestess",
    age: 150,
    email: "melisandre@redtemple.com",
  },
];

const DataTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default DataTable;
