import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from '@looker/components'


/**
 * @uxpindocurl https://looker-open-source.github.io/components/latest/?path=/docs/docs-button--docs
 */
function Button(props) {
    return (
    <ButtonM {...props}/>
    )
} 

Button.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(["key","critical", "neutral"]),
  size: PropTypes.oneOf(["small", "xxsmall", "xsmall", "medium", "large"]),
  iconAfter: PropTypes.string,
  iconBefore: PropTypes.string,
  fullWidth: PropTypes.bool,
}

export default Button