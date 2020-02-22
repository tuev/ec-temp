const path = require('path')

module.exports = ({ baseConfig, env, config }) => {
  config.module.rules.push({
    loader: 'babel-loader',
    exclude: /node_modules/,
    test: /\.(js|jsx)$/,
    options: {
      presets: ['@babel/react'],
      plugins: [
        [
          'import',
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
          },
        ],
      ],
    },
  })
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      // require.resolve('ts-loader'),
      require.resolve('react-docgen-typescript-loader'),
    ],
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  })
  config.resolve.extensions.push('.ts', '.tsx')

  // Extend defaultConfig as you need.
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
