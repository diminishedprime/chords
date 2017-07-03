import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'

import {
  basePitches,
  stringForChord,
  chordQuality,
  qualities,
} from '../../chord-logic.js'
import {
  afChooseQuality,
  afChooseNote,
} from '../../redux/actions.js'
import {
  quality,
  note,
} from '../../redux/paths.js'

import './app.css'

const strings = ['E', 'B', 'G', 'D', 'A', 'E']

const Fret = ({sharp, normal, flat, idx}) => (
  <div className="fret" style={{
    minWidth: (idx===0) ? 20 : 100 * (1/(Math.pow(1.06, idx))),
    backgroundColor: R.cond([
      [R.equals(0), R.always('')],
      [R.equals(3), R.always('red')],
      [R.equals(5), R.always('red')],
      [R.equals(7), R.always('red')],
      [R.equals(12), R.always('purple')],
      [R.equals(15), R.always('red')],
      [R.T, R.always('green')],
    ])(idx),
  }}>
    { sharp && sharp }
    { flat && flat }
    { normal && normal }
  </div>
)

const String = connect(
  (state) => ({
    note: R.view(note, state),
    quality: R.view(quality, state),
  })
)(({pitch, note, quality}) => (
  <div className="string">
    { stringForChord(pitch, note, quality)
      .map((val, idx) => (
        <Fret key={idx} {...val} idx={idx} />
      ))}
  </div>
))


const Neck = () => (
  <div className="neck">
    {
      strings.map((string, idx) => (
        <String key={idx} pitch={string} />
      ))
    }
  </div>
)

const Quality = connect(
  (state) => ({
    qualities,
    quality: R.view(quality, state),
  }),
  (dispatch) => ({
    chooseQuality: (quality) => () => dispatch(afChooseQuality(quality)),
  })
)(({qualities, chooseQuality, quality}) => (
  <div className="qualities">
    {qualities.map((q, idx) => (
       <button className="quality"
               key={idx}
               onClick={chooseQuality(q)}
               style={{
                 backgroundColor: (q===quality) ? 'red' : null,
               }}
       >
         {q}
       </button>
     ))}
  </div>
))

const Note = connect(
  (state) => ({
    basePitches,
    note: R.view(note, state),
  }),
  (dispatch) => ({
    chooseNote: (note) => () => dispatch(afChooseNote(note)),
  })
)(({basePitches, chooseNote, note}) => (
  <div className="qualities">
    {basePitches.map((q, idx) => (
       <button className="note"
               key={idx}
               onClick={chooseNote(q)}
               style={{
                 backgroundColor: (q===note) ? 'red' : null,
               }}
       >
         {q}
       </button>
     ))}
  </div>
))


const App = () => (
  <div>
    Guitar app
    <Note />
    <Quality />
    <Neck />
  </div>
)

export default App
