module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.js',
          'src/components/DataTable/DataTable.js',
          'src/components/DataTableItem/DataTableItem.js',
          'src/components/DataTableCell/DataTableCell.js',
          'src/components/Heading/Heading.tsx',
          'src/components/Badge/Badge.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Looker UI'
};
