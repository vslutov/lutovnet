    import React from 'react'
    import ReactDOM from 'react-dom'
    import { createBrowserHistory } from 'history'
    import { Root } from './Root'
    import { createStore } from './Root/store'
    import { register } from './serviceWorker'

Add a custom bootstrap theme. That necessary, becouse we would
use dark theme.

    import './custom-bootstrap.scss'

Render app on root element. This line starts the app.

    history = createBrowserHistory()
    store = createStore({ history })

    ReactDOM.render pug'Root(history=history,store=store)', document.getElementById 'root'

Register service worker for fast offline work.

    register()
