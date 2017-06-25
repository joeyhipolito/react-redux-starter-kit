import React from 'react'
import PropTypes from 'prop-types'

export const Todo = ({ todos }) => (
  <div className='todo'>
    <input type="text" />
    <ul>
      {todos.map((todo) => <li>{todo.get('text')}</li>)}
    </ul>
  </div>
)

Todo.propTypes = {
  todos : PropTypes.object
}

export default Todo
