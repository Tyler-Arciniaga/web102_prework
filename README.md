# WEB102 Prework - Crowdfunding Display

Submitted by: Tyler Arciniaga

Crowdfunding Display is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: 5 hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] List anything else that you can get done to improve the app functionality!
* [x] Improved funcationality of the three buttons to now also properly change the stats part of the webpage to show stats about only unfunded games, only funded games, or all games.
* [x] Added a search bar which allows users to search for specific games that they know the names of in the list of games that are funded on Sea Monster Funding
* [x] Added an anchor point at the header of the webpage that allows users to automatically jump to the "Our Games" section of the web page

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='https://imgur.com/a/L2A393i](https://github.com/Tyler-Arciniaga/web102_prework/blob/main/web102_prework_tyler_arciniaga.gif?raw=true' title='Video Walkthrough' width='' alt='Video Walkthrough' />
![Website Tour](https://github.com/Tyler-Arciniaga/web102_prework/blob/main/web102_prework_tyler_arciniaga.gif?raw=true)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCAP and imgur
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

A challenge I faced was implementing the search box for the user to search for games by name. More specifically it was initially challenging figuring out how to trigger the filterbysearch function I created in the HTML file. I at first was trying to use a "oninput" command within the HTML file however through using console log it appeared that the filterbysearch function wasn't properly recognized during the time when a user inputted something into the search bar. Eventually I resolved this issue by adding a event listener within the JavaScript code which called the filterbysearch function in the event of "input".

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
