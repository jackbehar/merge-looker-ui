import React from "react";
import PropTypes from "prop-types";
import { DataTableItem as DataTableItemM } from '@looker/components'


/**
 * @uxpindocurl https://looker-open-source.github.io/components/latest/?path=/docs/docs-datatable--docs
 */
function DataTableItem(props) {
    return (
    <DataTableItemM {...props}/>
    )
} 



DataTableItem.propTypes = {
  
  /**
   *  The available actions for this item
   */
  actions: PropTypes.node,
  /**
   *  Sets the tooltip text and a hidden text label for the actions button (accessible to assistive technology)
   *  If unprovided by the user, a default string will be used instead
   * I18n recommended: content that is user visible should be treated for i18n
   *  @default Options
   */
  actionsTooltip: PropTypes.string,
  /**
   *  The id of this item
   */
  id: PropTypes.string,
  /**
   * A boolean indicating whether this item is selectable or not (the item will appear greyed out if true)
   */
  disabled: PropTypes.bool,
  /**
   * I18n recommended: content that is user visible should be treated for i18n
   */
  children: PropTypes.node,
  /*
   * A ReactNode (IconButton) that will be placed as a primary action on the right side of the row
   */
  actionPrimary: PropTypes.node

}

export default DataTableItem