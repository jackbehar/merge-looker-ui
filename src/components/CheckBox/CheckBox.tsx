import React from "react";
import CheckBoxM from 'devextreme-react/check-box';
import { Properties } from "devextreme/ui/check_box";

export interface props extends Properties {

}

export default function CheckBox(props: props) {
  return (
    <CheckBoxM {...props}/>
  );
}
