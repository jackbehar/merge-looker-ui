import * as React from 'react'
import { Heading as HeadingM } from '@looker/components'

interface HeadingProps2 {
  children: React.ReactNode,
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  color: "key" | "critical" | "neutral",
  fontSize: "small" | "xxsmall" | "xsmall" | "medium" | "large",
  fontWeight: "normal" | "medium" | "bold" | "semiBold",
  textTransform: "inherit" |"none" | "-moz-initial" | "initial" | "revert" | "unset" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "uppercase",
  textAlign: "left" | "center" | "right",
  lineHeight: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge" | "xxxxlarge",
}
export default function Heading(props: HeadingProps2, ) {
  return (
    <HeadingM {...props}>{props.children}</HeadingM>
  );
}
