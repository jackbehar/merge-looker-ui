# Create React/TypeScript DS

- Create a new React app with TypeScript as the template
  `npx create-react-app typescript-ds --template typescript`

- Add UXPin Merge to the project
  `yarn add @uxpin/merge-cli`

- Run the uxpin-merge init command (for JS)
  `npx uxpin-merge init`

- Update the uxpin.config.js file:
```
@@ -4,12 +4,12 @@ module.exports = {
       {
         name: 'General',
         include: [
-          'src/components/Button/Button.js',
+          'src/components/Button/Button.tsx',
         ],
       },
     ],
     wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
     webpackConfig: 'uxpin.webpack.config.js',
   },
-  name: 'Example Design System'
+  name: 'TypeScript Design System'
 };
```

- Update the uxpin.webpack.config.js to handle TypeScript:
```
@@ -9,11 +9,15 @@ module.exports = {
   },
   resolve: {
     modules: [__dirname, "node_modules"],
-    extensions: ["*", ".js", ".jsx"]
+    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
   },
   devtool: "source-map",
   module: {
     rules: [
+      {
+        test: /\.tsx?$/,
+        loader: 'ts-loader',
+      },
       {
         test: /\.(s*)css$/,
         use: [
```

- Install a TypeScript loader:
  `yarn add ts-loader --dev`

- Change the Button.js component file to Button.tsx:
```
@@ -1,21 +0,0 @@
-import React from "react";
-import PropTypes from "prop-types";
-
-function Button(props) {
-  return (
-    <button
-      onClick={props.onClick}
-      disabled={props.disabled}
-    >
-      {props.label}
-    </button>
-  );
-}
-
-Button.propTypes = {
-  onClick: PropTypes.func,
-  disabled: PropTypes.bool,
-  label: PropTypes.string,
-};
-
-export { Button as default };
diff --git a/src/components/Button/Button.tsx b/src/components/Button/Button.tsx
new file mode 100644
index 0000000..d9ca2ca
--- /dev/null
+++ b/src/components/Button/Button.tsx
@@ -0,0 +1,18 @@
+import React from "react";
+
+interface ButtonProps {
+  label: string;
+  disabled: boolean;
+  onClick(): void;
+}
+
+export default function Button(props: ButtonProps) {
+  return (
+    <button
+      onClick={props.onClick}
+      disabled={props.disabled}
+    >
+      {props.label}
+    </button>
+  );
+}
```
