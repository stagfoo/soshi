<p style="border-radius: 8px; background:#000" align="center"><img src="https://github.com/stagfoo/soshi/blob/master/build/soshi-bg.png?raw=true" width="150px" ></img></p>
<h1 align="center">Soshi</h1>
<p align="center">
Experimental Component libray for any framework
</p>

## Showcase
```
npm install
npm run start
```

## Planned Components
these will be build in the futyre

- Menu
- Chip (like a tag)
- Rating
- Textarea
- Select
- Toogle (switch)
- Checkbox
- Calendar
- Slider
- Tabs
- Accordion
- Card List
- Modal
- request ones through issues

## Build Components
these are build and in the showcase page

- Title
- Card
- Text List
- Button
- Image

## Usage
include soshi and choose a render, there is 3 included by default

```js
import Soshi from 'soshi'

const domComps = new Soshi({ dom: 'bel' }); //default renderer bel
domComps.r.title({text: 'Im a dom element'}); //HTMLElement

const vdomComps = new Soshi({ dom: 'vdom' }); //renderer virtual-dom
vdomComps.r.title({text: 'Im a vdom element'}); //virtual-dom object

const textComps = new Soshi({ dom: 'plaintext' }); //renderer plaintext
textComps.r.title({text: 'Im plaintext'}); //plaintext string
```

## Styling
These components will be styled by [fairybread](https://github.com/stagfoo/fairybread) in the Raeon Design Language (coming soon)

# Rendering System
Soshi works by using [hyperx](https://github.com/choojs/hyperx) and simple instancing to return your functional

## Frameworks

### React
Working using the createElement render function.
Testing - Card Function

### Angular
not tested

### Vue
Working using a plaintext tagged function returned into the template section.
probs can be set inside the vue components or mapped with {{prop}}

### Web Component
- not tested

add your own framework!

# Idea behind 素子(soshi)
to create a simple extendable functional component system.
The end result should be a HTML element that can be added to any framework.
