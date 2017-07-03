import R from 'ramda'

import {
  quality,
  note,
} from './paths.js'


export default R.compose(
  R.set(note, 'C'),
  R.set(quality, ['M'])
)({})
