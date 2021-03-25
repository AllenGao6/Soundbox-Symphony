# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Jianxiang Gao

Time spent: 7 hours spent in total

Link to project: https://glitch.com/edit/#!/agate-breezy-niece?path=script.js%3A1%3A0 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src='https://i.imgur.com/FMI3qss.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I checked CSS style guide for some CSS trick, and I also used some help from stack-overflow to do some debugging.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The biggest chanllenge is to let the sound play property, and I use console.log to check user interaction to debug playtone method. Another chanllenge is the logic behind the game, it took me a while to figure out how to configure game setting to advance mode. Overall, this project is very clear in its instruction, I did not encounter too many difficulty. For me personally, choosing which color to set is the biggest chanllenge, because you have to think from user's standpoint, and this takes creativity and artictic view. I need to practice more on my design skill to create better user experience in the future. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[I think javascript is very powerful in web development, but it could be very slow to adjust every element by id after use action. I wonder if there are some good javascript library we could use to speed up the development. Moreover, I have experience with react and Jquery, which are all based on javascript. After this project, it really draws me to think what adventages does these frameworks has over plain javascript, and how can I better exploit these differences for my future development. At last, I want to look more into CSS animation, which I think could be very helpful for web development and user experience. ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would consider making a chanllenge your friend mode, where the highest score is kept on a score board. And you can set the speed and round for your friends for fun. If possible, I wish to create a real time competition where users can play at the same time and compete on the score they recieve. Also I wish to make a hell mode, which there is no end, and the pattern would only increase in complxity. So user can test their limit of memorization. ]



## License

    Copyright [Jianxiang Gao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
