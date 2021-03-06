/*
  Reducers are pure funcrions that take a previous state and an action
  and returns the new state.

  A reduces should be a pure function.  It should not
  1) mutate its arguments
  2) Perform side effect calls like API  calls
  3) Call non pure functions like Date.now() or Math.random
*/

import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// the combined reducer will contain two keys, one is the todos array
// and the other is the visibilityFilter which initially contains 'SHOW_ALL'
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
