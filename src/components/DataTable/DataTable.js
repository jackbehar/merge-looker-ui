import React from "react";
import PropTypes from "prop-types";
import { DataTable as DataTableM } from '@looker/components'


/**
 * @uxpindocurl https://looker-open-source.github.io/components/latest/?path=/docs/docs-button--docs
 */
function DataTable(props) {
    return (
    <DataTableM {...props}/>
    )
} 



DataTable.propTypes = {
  
  
  
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  caption: PropTypes.string,

  columns: PropTypes.object,

  state: PropTypes.oneOf(["loading", "noResults"]),

  noResultsDisplay: PropTypes.node,

  firstColumnStuck: PropTypes.bool,


}

export default DataTable