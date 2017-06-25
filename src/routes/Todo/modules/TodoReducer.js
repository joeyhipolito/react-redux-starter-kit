import Immutable from 'immutable'
import { ACTION_HANDLERS } from './TodoActions'

const initialState = new Immutable.OrderedMap()

// Reducer ------------------------ {{{

export default function todoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
