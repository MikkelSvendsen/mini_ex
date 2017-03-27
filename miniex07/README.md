<h1>Form Art house!</h1>

This program is supposed to be opened with <b>Chrome</b> as it appears different than intended with Firefox.

Link: https://mikkelsvendsen.github.io/mini_ex/miniex07/

So what did I do? Well basically I made a program that illustrates a house and a cloudy sky by using only elements of the DOM library - more specifically the radio, the sliders and the check-, input- and selectboxes.

From bottom up: I laid the foundation (as described in the code) with "selectboxes". My intentions were to make some kind of array with different textoptions in order to save some lines in the code, but I didn't manage to make it work. I settled myself with just having 7 lines of code instead. 
I then moved on to making the walls of my house and decided to use "checkboxes". I simply made a loop of checkboxes at two different X positions and there I had my walls. 
Moving along I wanted to give my house a ceiling and I thought sliders would make up for a great ceiling. So like twice earlier already I looped 5 sliders with a variation to their position. In addition for some interactivity, the ceiling sliders 3, 4 and 5 controls the background RGB while the 1st slider controls all other ceiling sliders (and thus the black/white level of the background).

After making these sliders I thought I'd like some cloudy weather on my canvas, so I contemplated on how to illustrate some movement through the DOM elements and came up with an idea to make clouds of tiny-sized zombie-sliders. This should give the notion of movement or wind or whatever (atleast thats my idea (remember to open in Chrome or I guess this wont work properly)).

Okay so to ward off some of that bad weather I figured my house would definitely need a roof, like most houses do. So I went to make some "radios" which I then looped through twice in each their direction from the same x position (and almost Y). I figured out the rotational angle and number of radios suited in the loop for both directions to give it the visual I wanted

![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex07/FormArt1.JPG?raw=true "miniex07 Screenshot1")
![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex07/FormArt2.JPG?raw=true "miniex07 Screenshot2")
![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex07/FormArt3.JPG?raw=true "miniex07 Screenshot3")
