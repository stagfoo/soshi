# 素子 | Experimental alternatives to webcomponents

# Components
- button
- title
- card
- button
- input
- slider

# Libraries testing
- [yo-yo](https://github.com/maxogden/yo-yo)
- ~~[base-elements](https://github.com/shama/base-element)~~
- react
- Angular
- Vue
- Ember

# Experiments
- yoyo with custom events http://soshi-examples.surge.sh/010.html ( crashes android 2.3 )
- base-elements + bel (hello world) - http://soshi-examples.surge.sh/011.html ( crashes android 2.3 )
- yoyo no logic no events - http://soshi-examples.surge.sh/012.html ( android 2.3 )
- yoyo no events http://soshi-examples.surge.sh/013.html ( android 2.3 )
- yoyo no events inside a react component http://soshi-examples.surge.sh/014.html ( android 2.3 )
- title component inside card component (yoyo) http://soshi-examples.surge.sh/latest.html ( android 2.3 missing bind )
  window.CardEL.update({title: 'Testing'}) <= will only update child component and not other props

# Idea behind 素子
to create a simple component system that can be added to any framework.

## Template literals
these export very well with google closure compiler into normal string.

## morphdom 
Lightweight module for morphing an existing DOM node tree to match a target DOM node tree. It's fast and works with the real DOM—no virtual DOM needed!
- perf https://github.com/patrick-steele-idem/morphdom#benchmarks
