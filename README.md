# color-code-ansi

Add color and style to your messages in the Node.js console
## Usage

```js
import { colorCode } from 'color-code-ansi'
```

### Colors

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- brightblack
- brightred
- brightgreen
- brightyellow
- brightblue
- brightmagenta
- brightcyan
- brightwhite

```js
console.log(colorCode('Hello, World').color('red').end())
console.log(colorCode('Hello, World').color('#FF8800').end())
```
### Backgrounds

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- brightblack
- brightred
- brightgreen
- brightyellow
- brightblue
- brightmagenta
- brightcyan
- brightwhite

```js
console.log(colorCode('Hello, World').bg('cyan').end())
console.log(colorCode('Hello, World').bg('#00FF77').end())
```
### Graphics

- bold
- dim
- italic
- underline
- blinking
- inverse
- hidden
- strikethrough

```js
console.log(colorCode('Hello, World').grp('bold').end())
console.log(colorCode('Hello, World').grp('italic').end())
```

