

module.exports = (api) => {
  api.cache(true)

  console.log('xxxx apps/react-app babel.config.js')

  const presets = [
    [
      '@babel/preset-env',
      {
        'debug': false,
        'targets': '> 0.25%, not dead',
        'useBuiltIns': 'usage',
        'corejs': 3,
        'modules': false
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ].filter(Boolean)

  return {
    presets,
    plugins
  }
}
