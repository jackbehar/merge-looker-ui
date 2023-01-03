import React from "react";
import { DataTable as DataTableM,DataTableItem, DataTableAction,  DataTableProps, DataTableCell } from '@looker/components'

export default function DataTable(props: DataTableProps) {
  return (
    <DataTableM {...props}/>
//     <DataTableM
//     {...props}
//   caption="Cheeses example"
//   columns={[
//     {
//       id: 'id',
//       title: 'ID',
//       type: 'number'
//     },
//     {
//       id: 'name',
//       title: 'Name',
//       type: 'string'
//     }
//   ]} 
// >
//   <DataTableItem
//     actions={<><DataTableAction onClick={function noRefCheck(){}}>Select Cheese</DataTableAction></>}
//     id="1"
//     onClick={function noRefCheck(){}}
//   >
//     <DataTableCell>
//       1
//     </DataTableCell>
//     <DataTableCell>
//       Gorgonzola
//     </DataTableCell>
//   </DataTableItem>
//   <DataTableItem
//     actions={<><DataTableAction onClick={function noRefCheck(){}}>Select Cheese</DataTableAction></>}
//     id="2"
//     onClick={function noRefCheck(){}}
//   >
//     <DataTableCell>
//       2
//     </DataTableCell>
//     <DataTableCell>
//       Cheddar
//     </DataTableCell>
//   </DataTableItem>
//   <DataTableItem
//     actions={<><DataTableAction onClick={function noRefCheck(){}}>Select Cheese</DataTableAction></>}
//     id="3"
//     onClick={function noRefCheck(){}}
//   >
//     <DataTableCell>
//       3
//     </DataTableCell>
//     <DataTableCell>
//       Blue
//     </DataTableCell>
//   </DataTableItem>
// </DataTableM>
  );
}
