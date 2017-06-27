import initialState from './initial-state.js'

export const app = (state=initialState, action) => {
  switch(action.type) {
    default:
      console.log(`${action.type} not handled`)
  }
  return state
}
