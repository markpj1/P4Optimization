## Website Performance Optimization portfolio project


To get started, check out the repository, inspect the code,

###Follow link to page
[markpj1/P4Optimization](https://www.http://markpj1.github.io/P4Optimization/views/pizza.html)

Part 1: Optimize PageSpeed Insights score for index.html
Steps I took.

#1: Removed render blocking by moveing style.css to line 10 in index.html.

#2: removed google fonts it was just to heavy and slow for mobile tried using a media tag to load at 450px, then just decided to go for speed.

#3: added media tag to line 9 media='print'.

#4: moved inline javascript to the end of the file, to load after the body and put async attributes.

#5: Pizzeria.jpg was way to large resized and made two new formats, pizzeria.gif and pizzeria.jpg

#6: installed gulp image-min and minified images in img.

In main js we had to problems with a ton of jank.

#1: on line 452 took the code from sizeSwitcher and the switch statements into changePizzaSizes added break statements and changed sizes.

#2: We had alot of FSL forced synchronous layout happening creating Jank. I used a Debounce pattern to mininimize the layout calls, and added RAF requestAnimationFrame, also I reduced the number of pizzas to 32 way less work for the browser.
Transform could have been another option went for the Debounce. 

Thank you: for your time reviewing my code.






