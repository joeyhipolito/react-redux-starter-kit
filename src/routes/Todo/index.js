import { injectReducer } from '../../store/reducers'
import { injectSagas } from '../../store/sagas'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Todo = require('./containers/TodoContainer').default
      const actions = require('./modules/TodoActions').actions
      const reducer = require('./modules/TodoReducer').default
      const sagas = require('./modules/TodoSagas').sagas

      /*  Add the reducer and sagas to the store on key 'counter'  */
      injectReducer(store, { key: 'Todo', reducer })
      injectSagas(store, { key: 'Todo', sagas })

      store.dispatch(actions.loadTodos());
      /*  Return getComponent   */
      cb(null, Todo)


    /* Webpack named bundle   */
    }, 'Todos')
  }
})
