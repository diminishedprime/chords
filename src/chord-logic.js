import R from 'ramda'

const modBase1 = (dividend, divisor) =>
  ((dividend - 1) % divisor) + 1

const sharpOrder = ['F#', 'C#', 'G#', 'D#', 'A#', 'E#']
const flatOrder = ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb']

const keys = {}
keys['C'] = {sharps: 0, flats: 0}
keys['G'] = {sharps: 1, flats: 0}
keys['D'] = {sharps: 2, flats: 0}
keys['A'] = {sharps: 3, flats: 0}
keys['E'] = {sharps: 4, flats: 0}
keys['B'] = {sharps: 5, flats: 0}
keys['F#'] = {sharps: 6, flats: 0}
keys['C#'] = {sharps: 7, flats: 0}
keys['Cb'] = {sharps: 0, flats: 7}
keys['Gb'] = {sharps: 0, flats: 6}
keys['Db'] = {sharps: 0, flats: 5}
keys['Ab'] = {sharps: 0, flats: 4}
keys['Eb'] = {sharps: 0, flats: 3}
keys['Bb'] = {sharps: 0, flats: 2}
keys['F'] = {sharps: 0, flats: 1}

const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
numToNoteHash['sharp'][ modBase1(noteToNumHash['C'] + 1, 12)] = 'C#'
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
intervals['perfect 5'] = 7
intervals['minor 6'] = 8
intervals['major 6'] = 9
intervals['minor 7'] = 10
intervals['major 7'] = 11
intervals['octave'] = 12
intervals['minor 9'] = 13
intervals['major 9'] = 14
// min 10 - 14
// maj 10- 15
intervals['minor 11'] = 16
intervals['major 11'] = 17
// min 12

const scales = {}
scales['Major'] = ['major 2', 'major 2', 'minor 2', 'major 2', 'major 2', 'major 2', 'major 2', 'minor 2']

const chordQuality = {}
chordQuality[''] = ['prime', 'major 3', 'perfect 5']
chordQuality['maj7'] = ['prime', 'major 3', 'perfect 5', 'major 7']
chordQuality['-7'] = ['prime', 'minor 3', 'perfect 5', 'minor 7']
chordQuality['7'] = ['prime', 'major 3', 'perfect 5', 'minor 7']
chordQuality['7b9'] = ['prime', 'major 3','minor 7', 'minor 9']
chordQuality['6'] = ['prime', 'major 3', 'perfect 5', 'major 6']

const chromaticScaleFrom = (note=1) =>
  R.map((x) => modBase1(x, 12), R.range(note, note+12))

const lookupMulti = (keys, lookupable) =>
  R.map((key) => lookupable[key], keys)

const numsForQuality = (quality='', baseNote='D') => {
  const qualityIntervals = chordQuality[quality]
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
  quality='',
  frets=18
) => {
  const qualityNums = numsForQuality(quality, baseNote)
  const baseNum = noteToNum(stringNote)
  const nums = R.range(baseNum, baseNum + frets)

  const sharps = R.take(keys[baseNote]['sharps'], sharpOrder)
  const flats = R.take(keys[baseNote]['flats'], flatOrder)

  return R.map((num) => {
    const isPresent = R.find(
      R.eqBy(
        (thing) => modBase1(thing, 12),
        num
      ), qualityNums
    )
    if (isPresent !== undefined) {
      let info = infoForNum(num)

      if (!(info.sharp && R.find(R.equals(info.sharp), sharps))) {
        info = R.dissoc('sharp', info)
      }
      if (!(info.flat && R.find(R.equals(info.flat), flats))) {
        info = R.dissoc('flat', info)
      }
      return info
    }
  }, nums)

}

export default 'hi'
