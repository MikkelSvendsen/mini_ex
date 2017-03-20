This is my L-System Fractal Tree!

Link: https://mikkelsvendsen.github.io/mini_ex/miniex06_FractalTree_L-System/

![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex06_FractalTree_L-System/FractalTree2.JPG?raw=true "miniex06 Screenshot1")
![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex06_FractalTree_L-System/FractalTree3.JPG?raw=true "miniex06 Screenshot2")

I made this to explore and get a better understanding of algorithms in code and how they generate structures like this tree from just simple instructions. The L-System here goes like this: FF+[+F-F-F]-[-F+F+F]. What it means is basically for the tree branches to follow a set of rules as explained below:

'F' means to proceed fowards

'+' means to turn right

'-' means to turn left

'[' saves the position

']' loads the previous position

The way it works is by following these instructions. It goes forward twice, then turns right and saves position, turns right again and goes forward, turns left, goes forward, turns left again, goes forward again and then goes back to its saved position. Then it turns left, saves position, turns left again, goes forward, turns right, goes forward, turns right, goes forward and loads position - only to repeat itself at the new ends (provided by translating positions) for the next generation.

To make a different outcome for the tree every time the page is loaded I've put some randomness into my work. By providing a random rotation for every right and left turn and also a variation to the length of every branch, the generated tree shows a different output.

On the account of some frustrations understanding some of the complex ways of stringing the code together, I think trying out an approach with the L-System has been a good lecture for me, enlightening me more about how the processing of every single step and instruction is played out. It gives some motivation to see how relatively simple instructions can generate very natural-like patterns.

I initially made a different type of fractal tree that relies on rules for the angle rotation and length as well for the sake of producing different outcomes of the tree and its branches. Heres a link for it https://mikkelsvendsen.github.io/mini_ex/miniex6_FractalTree/. 

To progress generation click the canvas. It generates leafs at 9th generation, but has the same simplicity to it as the L-System fractal tree. The instructions are similar to the L-System: it also generates a new branch at a random angle of rotation and with a random length of the new branch. Instead of creating three 'links' on every branch like the L-System tree, this one only generates two straight line branches with another two straight line branches in the end - causing for a totally different tree pattern than the ones that are generated with the L-System.

![Alt text](https://mikkelsvendsen.github.io/mini_ex/miniex6_FractalTree/FractalTree1.JPG?raw=true "miniex06 Screenshot1")

The functionality between the two processes are different in their workings and instructions but provides the same set of rules to generate unique 'trees' with each their pattern.
