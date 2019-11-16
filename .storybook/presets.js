const path = require('path')

module.exports = [
  {
    // name: '@storybook/addon-docs/react/preset',
    name: '@storybook/preset-typescript',
    options: {
      babelOptions: {},
      include: [path.resolve(__dirname, '../src')],
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
      },
    },
  },
  {
    name: '@storybook/addon-docs/react/preset',
    options: {
      babelOptions: {},
      configureJSX: true,
      sourceLoaderOptions: null,
    },
  },
]
