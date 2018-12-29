
const targets = () => process.env.BABEL_ENV === 'node'
  ? ({ node: 10 }) : ({ browser: ['> 1%'] })

module.exports = (context, opts = {}) => ({
  presets: [
    [require('@babel/preset-env'), {
      targets: targets(),
      ...(opts['env'] || {})
    }],
    require('@babel/preset-react')
  ],
  plugins: [
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-proposal-class-properties'),
    [require('@babel/plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true,
      ...(opts['transform-runtime'] || {})
    }]
  ]
})
