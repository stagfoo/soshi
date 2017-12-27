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
- input
- select
- slider
- image
- modal...
- tabs
- request ones through issues

## Build Components
these are build and in the showcase page
- title
- card
- list
- button ( needs typescript cleanup )

## Styling 
- these components aren't styled yet but I would like to include a pre styled version in the future for everyone

# Libraries Testing
[yo-yo](https://github.com/maxogden/yo-yo) is the bases of these components but I will be including examples of these components inside other frameworks to show, you can use them together.

## React
- title
- card

## Angular
- not tested

## Vue
- not tested

## Ember
- not tested

## Web Component
- not tested


# Idea behind 素子(soshi)
to create a simple component system using es6 classes and a templating library.
The end result should be a HTML element that can be added to any framework.

## Template literals
these export very well with google closure compiler into normal string.

## Yoyo and Morphdom 
Lightweight module for morphing an existing DOM node tree to match a target DOM node tree. It's fast and works with the real DOM—no virtual DOM needed!
- perf https://github.com/patrick-steele-idem/morphdom#benchmarks
