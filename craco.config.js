module.exports = {
  babel: {
    plugins: [
      'transform-react-pug',
      ['transform-jsx-classname-components', {
        'objects': ['React']
      }]
    ]
  },
  eslint: {
    enable: false,
    configure: {
      plugins: [
        'react-pug'
      ],
      extends: [
        'plugin:react-pug/all'
      ]
    }
  }
}
