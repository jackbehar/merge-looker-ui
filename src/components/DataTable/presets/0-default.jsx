import * as React from "react";
import DataTable from "../DataTable";

export default (
  <DataTable
    uxpId="data-table-1"
    caption="This is the caption"
    columns={[
        {
            "id": "id",
            "title": "ID",
            "type": "number",
            "size": "small"
        },
        {
            "id": "fname",
            "title": "First Name",
            "type": "string",
            "size": "medium"
        },
        {
          "id": "lname",
          "title": "Last Name",
          "type": "string",
          "size": "medium"
      }
    ]}
  >hello
  </DataTable>
);
