const path = require('path')
const fs = require('fs')

const { getLoader, loaderByName, throwUnexpectedConfigError, addAfterLoader } = require("@craco/craco")
const  { pick } = require('ramda')

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const pug = {
  overrideCracoConfig: ({ cracoConfig }) => {
    if (cracoConfig.babel == null) {
      cracoConfig.babel = {}
    }

    if (cracoConfig.babel.plugins == null) {
      cracoConfig.babel.plugins = []
    }

    cracoConfig.babel.plugins.push('transform-react-pug')
    return cracoConfig
  }
}

const coffee = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { paths } }) => {
    const { appIndex='src/index.js' } = pluginOptions
    paths.appIndexJs = resolveApp(appIndex)

    return cracoConfig
  },
  overrideWebpackConfig: ({ webpackConfig }) => {
    // Find loaders
    const { isFound: isBabelFound, match: babelMatch } = getLoader(webpackConfig, loaderByName('babel-loader'))

    if (!isBabelFound) {
      throwUnexpectedConfigError({
        message: "Can't find babel-loader in the webpack config!",
        githubIssueQuery: "webpack+babel-loader"
      })
    }

    const { loader: babelLoaderObject } = babelMatch
    const { include } = babelLoaderObject
    const babelLoader = pick(['loader', 'options'], babelLoaderObject)

    const { isFound: isFileFound, match: fileMatch } = getLoader(webpackConfig, loaderByName('file-loader'))

    if (!isFileFound) {
      throwUnexpectedConfigError({
        message: "Can't find file-loader in the webpack config!",
        githubIssueQuery: "webpack+file-loader"
      })
    }

    const { loader: fileLoader } = fileMatch

    // Modify config
    fileLoader.exclude.push(/\.(coffee|cjsx|litcoffee|coffee\.md)$/)

    addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
      test: /\.(coffee|cjsx)$/,
      include,
      use: [
        babelLoader,
        loaderByName('coffee-loader')
      ]
    })

    addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
      test: /\.(litcoffee|coffee\.md)$/,
      include,
      use: [
        babelLoader,
        {
          loader: require.resolve('coffee-loader'),
          options: {
            literate: true
          }
        }
      ]
    })

    webpackConfig.resolve.extensions = webpackConfig.resolve.extensions.concat(
      ['.coffee', '.cjsx', '.litcoffee', '.coffee.md']
    )

    return webpackConfig
  }
}

module.exports = {
  eslint: {
    enable: false
  },
  plugins: [
    {
      plugin: pug
    },
    {
      plugin: coffee,
      options: {
        appIndex: 'src/index.coffee.md'
      }
    }
  ]
}
