import * as colorgraphics from './colorgraphics.js'

class Code {
  constructor (text) {
    this.text = text
  }

  end () {
    return this.text
  }

  color (txt) {
    this.text = colorgraphics.COLORS[txt.toUpperCase()] + this.text + '\x1b[0m'
    return this
  }

  bg (txt) {
    this.text = colorgraphics.BG_COLORS[txt.toUpperCase()] + this.text + '\x1b[0m'
    return this
  }

  grp (txt) {
    this.text = colorgraphics.GRAPHICS[txt.toUpperCase()] + this.text + '\x1b[0m'
    return this
  }
}

// eslint-disable-next-line no-unused-vars
export function colorCode (text) {
  return new Code(text)
}
