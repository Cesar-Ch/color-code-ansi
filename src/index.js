import * as colorgraphics from './colorgraphics.js'

class Code {
  constructor (text) {
    this.text = text
  }

  end () {
    return this.text
  }

  color (txt) {
    if (txt.startsWith('#')) {
      this.text = `\x1b[38;2;${parseInt(txt.slice(1, 3), 16)};${parseInt(txt.slice(3, 5), 16)};${parseInt(txt.slice(5, 7), 16)}m` + this.text + '\x1b[0m'
      return this
    } else {
      this.text = colorgraphics.COLORS[txt.toUpperCase()] + this.text + '\x1b[0m'
      return this
    }
  }

  bg (txt) {
    if (txt.startsWith('#')) {
      this.text = `\x1b[48;2;${parseInt(txt.slice(1, 3), 16)};${parseInt(txt.slice(3, 5), 16)};${parseInt(txt.slice(5, 7), 16)}m` + this.text + '\x1b[0m'
      return this
    } else {
      this.text = colorgraphics.BG_COLORS[txt.toUpperCase()] + this.text + '\x1b[0m'
      return this
    }
  }

  grp (txt) {
    this.text = colorgraphics.GRAPHICS[txt.toUpperCase()] + this.text + '\x1b[0m'
    return this
  }
}

export function colorCode (text) {
  return new Code(text)
}
