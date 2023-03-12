# color-code-ansi

Add color and style to your messages in the Node.js console
## Usage

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
console.log(colorCode('Hello, World').color('brightred').end())
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
console.log(colorCode('Hello, World').bg('brightcyan').end())
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

