<h1>Form Art house!</h1>

This program is supposed to be opened with <b>Chrome</b> as apparently it appears different than intended when using Firefox.

Link: https://mikkelsvendsen.github.io/mini_ex/miniex07/

![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex07/FormArt1.JPG?raw=true "miniex07 Screenshot1")

So what did I do? Well basically I made a program that illustrates a house and a cloudy sky by using only elements of the DOM library - more specifically the radio, the sliders and the check-, input- and selectboxes.

<h2>What is it?</h2>
From bottom up: I laid the foundation (as described in the code) with the "selectboxes". My intentions were to make some kind of array with different textoptions in order to save some lines in the code, but I didn't manage to make it work. I settled myself with just having the 7 lines of code instead. I then moved on to making the walls of my house and decided to use "checkboxes". I simply made a loop of checkboxes at two different X positions and there I had my walls. 

Moving along I wanted to give my house a ceiling and I thought sliders would make up for a great ceiling. So like twice earlier already I looped 5 sliders with a variation to their position. In addition, for some interactivity, the ceiling sliders 3, 4 and 5 controls the background RGB while the 1st slider controls all other ceiling sliders (and thus the black/white level of the background).

After making these sliders I thought I'd like some cloudy weather on my canvas, so I contemplated on how to illustrate some movement through the DOM elements and came up with an idea to make clouds of tiny-sized zombie-sliders. This should give the notion of movement or wind or whatever (atleast thats the idea (remember to open in Chrome or I guess this wont work properly)).

Okay so to ward off some of that bad weather I figured my house would definitely need a roof. So I went to make some "radios" which I then looped in each their direction from the same x position (and almost Y). I then figured the rotational angle and number of radios suited in the loop for both directions to give it the visual I wanted (slightly tilted triangle or smth).

What I then need to do to my house was add to it an entrance and some outpeek; a door and windows. I did this with three simple input textboxes. At last for the roof I created some more zombie-sliders with a slight offset for a cozy snake-like pattern.

<h3>My process</h3>
During the process of working with this sketch I figured a lot of stuff simply by trying out new things, much of it by intuition and just doing things "on the fly" and by my own. Some of it didn't work out, while some of it caused for smaller revelations in terms of what is possible and how I can string my stuff together. All in all this sketch is not very complicated or complex, but I find that working with it still gave me some insights to more complex coding. Ofc it caused for some frustrations along the way, I had to give up on some of my ideas because I simply couldn't make it happen. Despite these frustrations, however, I'm quite confident that going on with this coding in practice helps me slowly getting better at this stuff. Much of what I do now I had no idea about whatsoever at first class. And doing some things now just by intuition feelsgoodman.

![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex07/FormArt2.JPG?raw=true "miniex07 Screenshot2")

<h4>OOP</h4>
First off I believe objects are a neat way to organize code and data in a way that can also spare lines of code. Advantages can be found in the way that you can class objects and call them. From my own experience I find some complexity in the logics of the syntax and perhaps that, for now, makes it harder for me to create objects in a way that makes good sense, not only in general but to me aswell. In creating this I found that it was easier sometimes for me to do a lot of coding and then figure out "how to make it smaller" in terms of lines in the code. I believe this could've been much better throughout this sketch, like in the case of the seletboxes array where I wanted to not make 7 .option lines.

In my experience these frustrations of figuring out how to use specific things in javascript takes a lot of time at the moment, but in the end it can spare time. Like I mentioned earlier I feel like Im getting better at it, so from my perspective its a question of time spent practising using objects.

![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex07/FormArt3.JPG?raw=true "miniex07 Screenshot3")
