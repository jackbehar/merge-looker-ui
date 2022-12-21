// eslint-disable-next-line no-unused-vars
import React from "react";

if (!document.getElementById("dev-extreme-css")) {
  let devExtremeCss = document.createElement('link');
  devExtremeCss.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/devextreme/22.1.5/css/dx.light.css');
  devExtremeCss.setAttribute('rel', 'stylesheet');
  devExtremeCss.setAttribute("id", "dev-extreme-css");

  document.head.appendChild(devExtremeCss);
}

export default function UXPinWrapper({ children }) {
  return children;
}
