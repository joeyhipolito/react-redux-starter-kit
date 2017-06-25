import Immutable from 'immutable'
import { schema } from 'normalizr'

const Todo = Immutable.Record({
  id: undefined,
  done: false,
  text: '',
  createdAt: undefined,
  updatedAt: undefined
})

export const todoSchema = new schema.Entity('todos');
export const arrayOfTodos = new schema.Array(todoSchema);

export default Todo
