import R from 'ramda'

const modBase1 = (dividend, divisor) =>
  ((dividend - 1) % divisor) + 1

const sharpOrder = ['F#', 'C#', 'G#', 'D#', 'A#', 'E#']
const flatOrder = ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb']

export const basePitches = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C#', 'D#', 'F#', 'G#', 'A#', 'Db', 'Eb', 'Gb', 'Ab', 'Bb']

const keys = {}
keys['C ionian'] = {sharps: 0, flats: 0}
keys['A aolian'] = keys['C ionian']
keys['G mixolydian'] = keys['C ionian']

keys['G ionian'] = {sharps: 1, flats: 0}
keys['E aolian'] = keys['G ionian']
keys['D mixolydian'] = keys['G ionian']

keys['D ionian'] = {sharps: 2, flats: 0}
keys['B aolian'] = keys['D ionian']
keys['A mixolydian'] = keys['D ionian']

keys['A ionian'] = {sharps: 3, flats: 0}
keys['F# aolian'] = keys['A ionian']
keys['E mixolydian'] = keys['A ionian']

keys['E ionian'] = {sharps: 4, flats: 0}
keys['C# aolian'] = keys['E ionian']
keys['B mixolydian'] = keys['E ionian']

keys['B ionian'] = {sharps: 5, flats: 0}
keys['G# aolian'] = keys['B ionian']
keys['F# mixolydian'] = keys['B ionian']

keys['F# ionian'] = {sharps: 6, flats: 0}
keys['D# aolian'] = keys['F# ionian']
keys['C# mixolydian'] = keys['F# ionian']

keys['C# ionian'] = {sharps: 7, flats: 0}
keys['A# aolian'] = keys['C# ionian']
keys['Cb mixolydian'] = keys['C# ionian']

keys['Cb ionian'] = {sharps: 0, flats: 7}
keys['Ab aolian'] = keys['Cb ionian']
keys['Gb mixolydian'] = keys['Cb ionian']

keys['Gb ionian'] = {sharps: 0, flats: 6}
keys['Eb aolian'] = keys['Gb ionian']
keys['Db mixolydian'] = keys['Gb ionian']

keys['Db ionian'] = {sharps: 0, flats: 5}
keys['Bb aolian'] = keys['Db ionian']
keys['Ab mixolydian'] = keys['Db ionian']

keys['Ab ionian'] = {sharps: 0, flats: 4}
keys['F aolian'] = keys['Ab ionian']
keys['Eb mixolydian'] = keys['Ab ionian']

keys['Eb ionian'] = {sharps: 0, flats: 3}
keys['C aolian'] = keys['Eb ionian']
keys['Bb mixolydian'] = keys['Eb ionian']

keys['Bb ionian'] = {sharps: 0, flats: 2}
keys['G aolian'] = keys['Bb ionian']
keys['F mixolydian'] = keys['Bb ionian']

keys['F ionian'] = {sharps: 0, flats: 1}
keys['D aolian'] = keys['F ionian']
keys['C mixolydian'] = keys['F ionian']

const noteToNumHash = {}
const numToNoteHash = {}
numToNoteHash['normal'] = {}
numToNoteHash['flat'] = {}
numToNoteHash['sharp'] = {}

// Normals
noteToNumHash['C'] = 1
numToNoteHash['normal'][1] = 'C'
noteToNumHash['D'] = 3
numToNoteHash['normal'][3] = 'D'
noteToNumHash['E'] = 5
numToNoteHash['normal'][5] = 'E'
noteToNumHash['F'] = 6
numToNoteHash['normal'][6] = 'F'
noteToNumHash['G'] = 8
numToNoteHash['normal'][8] = 'G'
noteToNumHash['A'] = 10
numToNoteHash['normal'][10] = 'A'
noteToNumHash['B'] = 12
numToNoteHash['normal'][12] = 'B'

// sharps
noteToNumHash['C#'] = modBase1(noteToNumHash['C'] + 1, 12)
numToNoteHash['sharp'][modBase1(noteToNumHash['C'] + 1, 12)] = 'C#'
noteToNumHash['D#'] = modBase1(noteToNumHash['D'] + 1, 12)
numToNoteHash['sharp'][modBase1(noteToNumHash['D'] + 1, 12)] = 'D#'
noteToNumHash['E#'] = modBase1(noteToNumHash['E'] + 1, 12)
numToNoteHash['sharp'][modBase1(noteToNumHash['E'] + 1, 12)] = 'E#'
noteToNumHash['F#'] = modBase1(noteToNumHash['F'] + 1, 12)
numToNoteHash['sharp'][modBase1(noteToNumHash['F'] + 1, 12)] = 'F#'
noteToNumHash['G#'] = modBase1(noteToNumHash['G'] + 1, 12)
numToNoteHash['sharp'][modBase1(noteToNumHash['G'] + 1, 12)] = 'G#'
noteToNumHash['A#'] = modBase1(noteToNumHash['A'] + 1, 12)
numToNoteHash['sharp'][modBase1(noteToNumHash['A'] + 1, 12)] = 'A#'
noteToNumHash['B#'] = modBase1(noteToNumHash['B'] + 1, 12)
numToNoteHash['sharp'][modBase1(noteToNumHash['B'] + 1, 12)] = 'B#'

// flats
noteToNumHash['Cb'] = modBase1(noteToNumHash['C'] - 1, 12)
numToNoteHash['flat'][modBase1(noteToNumHash['C'] - 1, 12)] = 'Cb'
noteToNumHash['Db'] = modBase1(noteToNumHash['D'] - 1, 12)
numToNoteHash['flat'][modBase1(noteToNumHash['D'] - 1, 12)] = 'Db'
noteToNumHash['Eb'] = modBase1(noteToNumHash['E'] - 1, 12)
numToNoteHash['flat'][modBase1(noteToNumHash['E'] - 1, 12)] = 'Eb'
noteToNumHash['Fb'] = modBase1(noteToNumHash['F'] - 1, 12)
numToNoteHash['flat'][modBase1(noteToNumHash['F'] - 1, 12)] = 'Fb'
noteToNumHash['Gb'] = modBase1(noteToNumHash['G'] - 1, 12)
numToNoteHash['flat'][modBase1(noteToNumHash['G'] - 1, 12)] = 'Gb'
noteToNumHash['Ab'] = modBase1(noteToNumHash['A'] - 1, 12)
numToNoteHash['flat'][modBase1(noteToNumHash['A'] - 1, 12)] = 'Ab'
noteToNumHash['Bb'] = modBase1(noteToNumHash['B'] - 1, 12)
numToNoteHash['flat'][modBase1(noteToNumHash['B'] - 1, 12)] = 'Bb'

const noteToNum = (note) => noteToNumHash[note]

const normalNumPath = (num) => R.lensPath(['normal', num])
const sharpNumPath  = (num) => R.lensPath(['sharp', num])
const flatNumPath   = (num) => R.lensPath(['flat', num])

const numToNote = (num, kind='normal') => {
  const normalizedNum = modBase1(num, 12)
  const normal = R.view(normalNumPath(normalizedNum), numToNoteHash)
  const sharp = R.view(sharpNumPath(normalizedNum), numToNoteHash)
  const flat = R.view(flatNumPath(normalizedNum), numToNoteHash)

  if (kind === 'sharp') return sharp
  else if (kind === 'flat') return flat
  else return normal
}

const notesForNums = (nums, kind='normal') =>
  R.map((num) => numToNote(num, kind), nums)

const intervals = {}
/* returns the number of halfsteps between the base note and the other note of
   the interval*/
intervals['prime'] = 0
intervals['minor 2'] = 1
intervals['major 2'] = 2
intervals['minor 3'] = 3
intervals['major 3'] = 4
intervals['perfect 4'] = 5
intervals['tritone'] = 6
intervals['flat 5'] = 6
intervals['perfect 5'] = 7
intervals['sharp 5'] = 8
intervals['minor 6'] = 8
intervals['major 6'] = 9
intervals['minor 7'] = 10
intervals['major 7'] = 11
intervals['octave'] = 12
intervals['minor 9'] = 1
intervals['major 9'] = 2
// min 10 - 14
// maj 10- 15
intervals['minor 11'] = 4
intervals['major 11'] = 5
intervals['sharp 11'] = 6
// min 12

const scales = {}
scales['Major'] = ['major 2', 'major 2', 'minor 2', 'major 2', 'major 2', 'major 2', 'major 2', 'minor 2']

export const chordQuality = {}
const modeForQuality = {}

modeForQuality['M'] = 'ionian'
chordQuality['M'] = {'normal': ['prime', 'major 3', 'perfect 5']}

modeForQuality['m'] = 'aolian'
chordQuality['m'] = {'normal': ['prime', 'minor 3', 'perfect 5']}
chordQuality['m']['maj7'] = {'normal': ['prime', 'minor 3', 'flat 5', 'major 7']}

modeForQuality['aug'] = 'ionian'
chordQuality['aug'] = {'normal': ['prime', 'major 3', 'sharp 5']}

modeForQuality['dim'] = 'aolian'
chordQuality['dim'] = {'normal': ['prime', 'minor 3', 'flat 5']}

modeForQuality['maj7'] = 'ionian'
chordQuality['maj7'] = {'normal': ['prime', 'major 3', 'perfect 5', 'major 7']}

modeForQuality['maj9'] = 'ionian'
chordQuality['maj9'] = {'normal': ['prime', 'major 3', 'perfect 5', 'major 7', 'major 9']}

modeForQuality['m7'] = 'aolian'
chordQuality['m7'] = {'normal': ['prime', 'minor 3', 'perfect 5', 'minor 7']}
chordQuality['m7']['b5'] = {'normal': ['prime', 'minor 3', 'flat 5', 'minor 7']}

modeForQuality['7'] = 'mixolydian'
chordQuality['7'] = {'normal': ['prime', 'major 3', 'perfect 5', 'minor 7']}
chordQuality['7']['b9'] = {'normal': ['prime', 'major 3','minor 7', 'minor 9']}
chordQuality['7']['#11'] = {'normal': ['prime', 'major 3', 'minor 7', 'major 9', 'sharp 11']}
chordQuality['7']['#5'] = {'normal': ['prime', 'major 3', 'sharp 5', 'minor 7']}
chordQuality['7']['b13'] = {'normal': ['prime', 'major 3','minor 7', 'minor 9']}

modeForQuality['9'] = 'mixolydian'
chordQuality['9'] = {'normal': ['prime', 'major 3', 'perfect 5', 'minor 7', 'major 9']}

modeForQuality['6'] = 'ionian'
chordQuality['6'] = {'normal': ['prime', 'major 3', 'perfect 5', 'major 6']}

export const qualities = []
const magic = (nestedMap, path) => {
  const babyKeys = R.keys(nestedMap)
  R.map((key) => {
    if (key === 'normal') {
      qualities.push(path)
      return
    } else {
      magic(nestedMap[key], [ ...path, key])
    }
  }, babyKeys)
}
magic(chordQuality, [])

const intervalsForQuality = (quality) =>
  R.reduce((acc, qual) => acc[qual],
           chordQuality,
           [...quality, 'normal'])

const chromaticScaleFrom = (note=1) =>
  R.map((x) => modBase1(x, 12), R.range(note, note+12))

const lookupMulti = (keys, lookupable) =>
  R.map((key) => lookupable[key], keys)


const numsForQuality = (quality=['M'], baseNote='D') => {
  const qualityIntervals = intervalsForQuality(quality)
  const nums = lookupMulti(qualityIntervals, intervals)
  const adjusted = R.map((x) => x + noteToNum(baseNote), nums)
  return adjusted
}

const infoForNum = (num) => ({
  fret:num,
  note: num,
  sharp: numToNote(num, 'sharp'),
  flat: numToNote(num, 'flat'),
  normal: numToNote(num),
})

export const stringFor = (note='E', frets=18) => {
  const baseNum = noteToNum(note)
  const nums = R.range(baseNum, baseNum + frets)
  return R.map(infoForNum, nums)
}

export const stringForChord = (
  stringNote='E',
  baseNote='C',
  quality=['M'],
  frets=18
) => {
  const qualityNums = numsForQuality(quality, baseNote)
  const intervals = intervalsForQuality(quality)
  const key = baseNote + ' ' + modeForQuality[quality[0]]
  const baseNum = noteToNum(stringNote)
  const nums = R.range(baseNum, baseNum + frets)
  const intervalsWNums = R.zipObj(qualityNums, intervals)
  const sharps = R.take(keys[key]['sharps'], sharpOrder)
  const flats = R.take(keys[key]['flats'], flatOrder)
  return R.map((num) => {
    const isPresent = R.find(
      R.eqBy(
        (thing) => modBase1(thing, 12),
        num
      ), qualityNums
    )
    if (isPresent !== undefined) {
      let info = infoForNum(num)
      const interval = intervalsWNums[modBase1(num, 12)]
      if (!(info.sharp && R.find(R.equals(info.sharp), sharps))
          && !(/sharp.*/).test(interval)
      ) {
        info = R.dissoc('sharp', info)
      }
      if (!(info.flat && R.find(R.equals(info.flat), flats))
          && !(/flat.*/).test(interval)) {
        info = R.dissoc('flat', info)
      }
      return info
    }
  }, nums)

}

export default 'hi'
