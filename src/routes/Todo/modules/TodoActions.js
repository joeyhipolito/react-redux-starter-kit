import Immutable from 'immutable'
import Todo from './TodoModel'
import {
  TODO_LOAD_REQUEST,
  TODO_LOAD_SUCCESS
} from './TodoConstants'

export function loadTodos () {
  return {
    type: TODO_LOAD_REQUEST
  }
}

export function todosLoaded (payload) {
  return {
    type: TODO_LOAD_SUCCESS,
    payload
  }
}

export const ACTION_HANDLERS = {
  [TODO_LOAD_SUCCESS] : (state, action) => {
    const todos = action.payload.entities.todos
    return !todos
      ? state
      : state.merge(Immutable.fromJS(todos).map( todo => new Todo(todo) ))
  }
}

export const actions = {
  loadTodos
}
