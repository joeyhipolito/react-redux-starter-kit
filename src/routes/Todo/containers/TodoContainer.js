import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Todo from '../components/Todo'
import { getTodos } from '../modules/TodoSelectors'

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  todos: getTodos(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
