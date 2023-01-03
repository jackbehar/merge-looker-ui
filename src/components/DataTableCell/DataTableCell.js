import React from "react";
import PropTypes from "prop-types";
import { DataTableCell as DataTableCellM } from '@looker/components'


/**
 * @uxpindocurl https://looker-open-source.github.io/components/latest/?path=/docs/docs-datatable--docs
 */
function DataTableCell(props) {
    return (
    <DataTableCellM {...props}/>
    )
} 



DataTableCell.propTypes = {
  /**
   * I18n recommended: content that is user visible should be treated for i18n
   */
  children: PropTypes.node,
   /**
   * I18n recommended: content that is user visible should be treated for i18n
   */
   description: PropTypes.node,
   indicator: PropTypes.node,
   size: PropTypes.oneOf(["small", "medium", "large", "auto", "nowrap"]),

}

export default DataTableCell