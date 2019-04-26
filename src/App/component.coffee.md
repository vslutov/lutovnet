    import React, { Fragment } from 'react'

    import { Container, Row, Col } from 'reactstrap'
    import { Navbar } from '../Navbar'

    export default AppComponent = => `pug\`
      Fragment
        Navbar
        Container
          Row
            Col
              p.lead Hello, Pug!
    \``
