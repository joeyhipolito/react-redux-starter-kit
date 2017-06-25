import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { TODO_LOAD_REQUEST } from './TodoConstants'
import { todosLoaded } from './TodoActions'
import { arrayOfTodos } from './TodoModel'

const date = new Date()
const request = () => {
  return normalize([
    {
      id: 0, done: false, text: 'zero',
      createdAt: date, updatedAt: date
    }
  ], arrayOfTodos)
}

/**
 * Todo request/response handler
 */
export function* getTodos() {
  const todos = yield call(request)
  yield delay(1000)
  yield put(todosLoaded(todos))
}

/**
 * Saga manages watcher lifecycle
 */
export function* todoData() {
  yield takeLatest(TODO_LOAD_REQUEST, getTodos)
}

export const sagas = [
  todoData
]
