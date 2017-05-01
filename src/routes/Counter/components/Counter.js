import React from 'react'
import PropTypes from 'prop-types'
import './Counter.scss'

export const Counter = (props) => (
  <div className='counter' >
    <h2>Counter: {props.counter}</h2>
    <h3>Counter Square Root: {props.root}</h3>
    <button onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Counter.propTypes = {
  root        : PropTypes.number.isRequired,
  counter     : PropTypes.number.isRequired,
  doubleAsync : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}

export default Counter
