import React from 'react'
import { stringForChord } from '../../chord-logic.js'

import './app.css'

const strings = ['E', 'B', 'G', 'D', 'A', 'E']

const Fret = ({sharp, normal, flat}) => (
  <div className="fret">
    { sharp && sharp }
    { flat && flat }
    { normal && normal }

  </div>
)

const String = ({pitch}) => (
  <div className="string">
    { stringForChord(pitch, 'Eb', 'maj7')
      .map((val, idx) => (
        <Fret key={idx} {...val} />
      ))}
  </div>
)


const Neck = () => (
  <div className="neck">
    <div className="string">
      { stringForChord(strings[0], 'Eb', 'maj7')
        .map((_, idx) => (
          <div key={idx} className="fret">{idx}</div>
        ))
      }
    </div>
    {strings.map((string, idx) => (
       <String key={idx} pitch={string} />
     )) }
  </div>
)

const App = () => (
  <div>
    Guitar app
    <Neck />
  </div>
)

export default App
