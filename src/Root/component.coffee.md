    import React from 'react'
    import { HeadProvider } from 'react-head'
    import { ConnectedRouter } from 'connected-react-router'
    import { Provider } from 'react-redux'
    import { I18nextProvider } from 'react-i18next'

    import { App } from '../App'

    export RootComponent = ({ store, history }) => `pug\`
      HeadProvider
        Provider(store=store)
          ConnectedRouter(history=history)
            App
    \``
