import R from 'ramda'

const qualityA = ['quality']
const noteA = ['note']

export const quality = R.lensPath(qualityA)
export const note = R.lensPath(noteA)
