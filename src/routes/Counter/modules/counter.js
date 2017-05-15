import { createSelector } from 'reselect'
import { delay } from 'redux-saga'
import { take, put, select } from 'redux-saga/effects'

// Constants ---------------------- {{{
export const COUNTER_DOUBLE = 'COUNTER_DOUBLE'
// -------------------------------- }}}

// Actions ------------------------ {{{
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export function double () {
  return {
    type: COUNTER_DOUBLE
  }
}

export const actions = {
  increment,
  double
}
// -------------------------------- }}}

// ------------------------------------
// Action Handlers ---------------- {{{
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT] : (state, action) => state + action.payload
}
// -------------------------------- }}}

// Reducer ------------------------ {{{
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
// -------------------------------- }}}

// ------------------------------------
// Sagas -------------------------- {{{
export function *doubleAsync () {
  while (true) {
    yield take(COUNTER_DOUBLE)
    const state = yield select()
    yield delay(1000)
    yield put(increment(state.counter))
  }
}

export const sagas = [
  doubleAsync
]
// -------------------------------- }}}

// Selectors ---------------------- {{{
export const counterSelector = state => state.counter
export const squareRootSelector = createSelector(
  counterSelector,
  counter => Math.sqrt(counter)
)
// -------------------------------- }}}
