const path = require('path')

module.exports = [
  {
    name: '@storybook/preset-typescript',
    options: {
      babelOptions: {},
      include: [path.resolve(__dirname, '../src')],
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
      },
    },
  },
  // {
  //   name: '@storybook/preset-create-react-app',
  //   options: {
  //     tsDocgenLoaderOptions: {
  //       tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
  //     },
  //   },
  // },
  {
    name: '@storybook/addon-docs',
    options: {
      babelOptions: {},
      configureJSX: true,
      sourceLoaderOptions: null,
    },
  },
]
