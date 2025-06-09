import types from './types'

const addUser = user => ({
  type: types.ADD_USER, user
})

const removeUser = id => ({
  type: types.REMOVE_USER, id
})

export default {
  addUser,
  removeUser,
}