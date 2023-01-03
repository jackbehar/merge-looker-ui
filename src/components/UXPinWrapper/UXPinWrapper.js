// eslint-disable-next-line no-unused-vars
import React from "react";

import boilerplateTheme from "./boilerplate-theme";
import { ComponentsProvider, ExtendComponentsThemeProvider } from '@looker/components';



export default function UXPinWrapper({ children }) {

  return (
    <ComponentsProvider >
      <ExtendComponentsThemeProvider themeCustomizations={boilerplateTheme}>{children}</ExtendComponentsThemeProvider>
    </ComponentsProvider>
  );
}