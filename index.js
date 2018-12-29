module.exports = (context, opts = {}) => ({
  presets: [
    [require('@babel/preset-env'), {
      targets: {
        esmodules: true
      },
      ...(opts['env'] || {})
    }],
    require('@babel/preset-react')
  ],
  plugins: [
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-proposal-class-properties'),
    [require('@babel/plugin-transform-runtime'), {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false,
      ...(opts['transform-runtime'] || {})
    }]
  ]
})
