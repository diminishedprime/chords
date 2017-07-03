import R from 'ramda'

import initialState from './initial-state.js'
import {
  CHOOSE_QUALITY,
  CHOOSE_NOTE,
} from './actions.js'
import {
  quality as qualityP,
  note as noteP,
} from './paths.js'

const chooseQuality = (state, {quality}) =>
  R.set(qualityP, quality, state)

const chooseNote = (state, {note}) =>
  R.set(noteP, note, state)

export const app = (state=initialState, action) => {
  switch(action.type) {
    case CHOOSE_QUALITY: return chooseQuality(state, action)
    case CHOOSE_NOTE: return chooseNote(state, action)
    default:
      console.log(`${action.type} not handled`)
  }
  return state
}
