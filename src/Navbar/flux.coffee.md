    import { createFlux } from '@vslutov/redux-flux'

    { setActions, navbarReducer, defaultSelectors } = createFlux({
      prefix: 'NAVBAR',
      defaultValues: {
      }
    })

    export { setActions as actions }
    export { defaultSelectors as selectors }
    export { navbarReducer }
