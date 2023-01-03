import * as React from "react";
import DataTable from "../DataTable";
import DataTableItem from "../../DataTableItem/DataTableItem";
import DataTableCell from "../../DataTableCell/DataTableCell";
import Button from "../../Button/Button";

export default (
  <DataTable
    uxpId="data-table-1"
    caption="Table Caption"
    columns={[
      {
        "id": "wwid",
        "size": "auto",
        "title": "WWID"
      },
      {
        "id": "name",
        "size": "medium",
        "title": "Name"
      },
      {
        "id": "address",
        "size": "large",
        "title": "Street Address"
      },
      {
        "id": "phone",
        "size": "medium",
        "title": "Phone Number"
      },
      {
        "id": "hours",
        "size": "auto",
        "title": "Hours"
      },
      {
        "id": "action",
        "size": "auto",
        "title": "Action"
      }
    ]}
  >
    <DataTableItem uxpId="data-table-item-1">
      <DataTableCell uxpId="data-table-cell-1-1">1111111</DataTableCell>
      <DataTableCell uxpId="data-table-cell-1-2">John Johnson</DataTableCell>
      <DataTableCell uxpId="data-table-cell-1-3">
        Johnson & Johnson WHQ \n
        1 Johnson & Johnson Plaza
        New Brunswick, New Jersey 08933
      </DataTableCell>
      <DataTableCell uxpId="data-table-cell-1-4">1-732-524-0400</DataTableCell>
      <DataTableCell uxpId="data-table-cell-1-5">40</DataTableCell>
      <DataTableCell uxpId="data-table-cell-1-6"><Button uxpId="action-button-1">Secondary</Button></DataTableCell>
    </DataTableItem>


    <DataTableItem uxpId="data-table-item-2">
      <DataTableCell uxpId="data-table-cell-2-1">2222222</DataTableCell>
      <DataTableCell uxpId="data-table-cell-2-2">James Johnson</DataTableCell>
      <DataTableCell uxpId="data-table-cell-2-3">
        Johnson & Johnson IT Services
        1003 US-202
        Raritan, New Jersey 08869
      </DataTableCell>
      <DataTableCell uxpId="data-table-cell-2-4">1-908-541-4100</DataTableCell>
      <DataTableCell uxpId="data-table-cell-2-5">40</DataTableCell>
      <DataTableCell uxpId="data-table-cell-2-6"><Button uxpId="action-button-2">Secondary</Button></DataTableCell>
    </DataTableItem>

    <DataTableItem uxpId="data-table-item-3">
      <DataTableCell uxpId="data-table-cell-3-1">333333</DataTableCell>
      <DataTableCell uxpId="data-table-cell-3-2">Joe Johnson</DataTableCell>
      <DataTableCell uxpId="data-table-cell-3-3">
        J&J Supply Chain
        430 US-22
        Bridgewater Township, New Jersey 08807
      </DataTableCell>
      <DataTableCell uxpId="data-table-cell-3-4">1-732-524-0400</DataTableCell>
      <DataTableCell uxpId="data-table-cell-3-5">40</DataTableCell>
      <DataTableCell uxpId="data-table-cell-3-6"><Button uxpId="action-button-3">Secondary</Button></DataTableCell>
    </DataTableItem>


    <DataTableItem uxpId="data-table-item-4">
      <DataTableCell uxpId="data-table-cell-4-1">444444</DataTableCell>
      <DataTableCell uxpId="data-table-cell-4-2">Robert Johnson</DataTableCell>
      <DataTableCell uxpId="data-table-cell-4-3">
        J&J - Johnson Hall
        501 George Street
        New Brunswick, New Jersey 08901
      </DataTableCell>
      <DataTableCell uxpId="data-table-cell-4-4">1-732-524-4100</DataTableCell>
      <DataTableCell uxpId="data-table-cell-4-5">40</DataTableCell>
      <DataTableCell uxpId="data-table-cell-4-6"><Button uxpId="action-button-4">Secondary</Button></DataTableCell>
    </DataTableItem>


    <DataTableItem uxpId="data-table-item-5">
      <DataTableCell uxpId="data-table-cell-5-1">444444</DataTableCell>
      <DataTableCell uxpId="data-table-cell-5-2">Jash Johnson</DataTableCell>
      <DataTableCell uxpId="data-table-cell-5-3">
        Johnson & Johnson Development
        410 George St
        New Brunswick, New Jersey 08901
      </DataTableCell>
      <DataTableCell uxpId="data-table-cell-5-4">1-732-524-0400</DataTableCell>
      <DataTableCell uxpId="data-table-cell-5-5">40</DataTableCell>
      <DataTableCell uxpId="data-table-cell-5-6"><Button uxpId="action-button-5">Secondary</Button></DataTableCell>
    </DataTableItem>

  </DataTable>
);
