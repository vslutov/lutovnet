    import React from 'react'
    import ReactDOM from 'react-dom'
    import { App } from './App'
    import { register } from './serviceWorker'

Add a custom bootstrap theme. That necessary, becouse we would
use dark theme.

    import './custom-bootstrap.scss'

Render app on root element. This line starts the app.

    ReactDOM.render pug'App', document.getElementById 'root'

Register service worker for fast offline work.

    register()
