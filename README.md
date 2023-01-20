# GERDBuddy

## Overview

<p align="center"> <img src="/images/buddy.gif" width="600"/> </p>
<br />

GERDBuddy is an allergy tracking app I started and trashed in Fall 2022. The idea was not to help users avoid foods they are allergic to, but to find possible food allergies a user could have. A user would be able to note food they ate, activities they performed, and symptoms they had in a certian block of time, and a correlation algorithm would use that data to find the most likely culprit for the problems they are having.

The project has been scrapped - the app is interactive but lacks any features and acts more as a proof of concept. However, by the time I had started this project I had gained and used experience in development and design, and I believe what's left of it shows this experience.

### Design Principles

There was quite a lot of thought that went into the design before I began programming. While I believe rapid prototyping would have served the project better, it would have added significantly more time, and the original diagrams I used had a lot of thought put into them;

The main screen of the project was simple: a user views a carousel of dates around the current date, that they can freely scroll through. The user can then select a date, which opens up a few panels each contaning a carousel of different blocks representing possible food / activities / symptoms. They could drag the item onto a time in the selected date, which represents performing that activity at that time. They would at any time be able to press a button to run the algoritm that would look over this data and determine what is most likely causing this symptom.

<p align="center"> <img src="/images/A.jpg" height="450"/> <img src="/images/AA.png" height="450"/> </p>

> The draft of the user scrolling through dates vs the actual prototype. In design classes I was taught the motto "there are no stupid users, only stupid designers." I believe that this crumbles down to the basic idea that if a client could become confused by, or break, a system, they likely will. Keeping this in mind, I figured users might become confused by the date caurosel - they may realize they can scroll, but not tap on, individual date blocks. For this reason, I made it clear that the blocks need to highlight when the user's finger is on them - regardless of if they are selecting that date, or scrolling through the wheel.

<p align="center"> <img src="/images/B.jpg" height="450"/> <img src="/images/BB.png" height="450"/> </p>

> The draft of selecting a date and viewing possible food items. The design was almost completely identical to the prototype at this stage. I ended up trying a few things for squishing down the date block - I originally wanted it to maintain it's proportions and have the contained time blocks be scrollable. Ultimately, I figured there was too much scrolling content and shrunk the boxes down.

<p align="center"> <img src="/images/C.jpg" height="450"/> </p>

> The draft for drag and drop functionality. This isn't a feature that is built in to React Native, and I ended up breaking the iterative design principle I mention below in favor of extra development time to make this look good. I stopped working on the project to focus on other aspects of my life, but I believe spending so much time on this and breaking that principle may have killed the project had I kept on things.

### Development Experience

At the point in my career where I began to work on GERDBuddy, I already had a decent amount of development experience. I consider the proof-of-concept to be very clean, and the amount of time I put into it would be doubled had I started it earlier in my career. The principle that helped most was one I learned in the Agile work environment of my job at Navsea: iterative design. The idea was that instead of polishing a feature, or even having it perform as intended, I would consistently focus on each piece of the app as a whole, making sure no one part would improve in quality far more than the others. No one part of the app should be fully functional if another part of the app didn't exist yet. In simple terms, the development process went as followed:

1. Make everything work
2. Make everything correct
3. Make everything fast
4. Make everything pretty

There are a few remnants of this left in the code - food blocks are hard coded rather than being randomly generated / sorted by most used, dates exist and are sorted according to the current time but there's no option to change them yet, etc.

The other rule that I followed was the Open-Closed principle, something I learned through my hobby of game development. The idea of the principle is that classes should be open for *development* but closed for *modification*. In essence, this boils down to making code reusable rather than completely refactoring it. Every time I wanted to change a component's behavior, then, I would make sure to put much of what used to exist in a seperate function. While this did take longer at the beginning, every time I needed to backtrack or I didn't like a change, it was easy to return to how things were.

> To run the project, a user needs to have Expo Go and Node Project manager installed. After cloning the repository, a user needs to run `npm run install` once to download necessary libraries. The project can then be launched

<p align="center"> <img src="/images/Bottom.jpg" width="250"/></p>

> The full early design for the app, as well as notes and rough ideas I wanted to implement below