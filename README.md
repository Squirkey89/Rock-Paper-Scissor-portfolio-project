# Rock Paper Scissors

The rock paper scissor game goes back a long way. Everyone is familiar with it from every corner of the world. The goal of the webpage was to create this game using javaScript and make it an interactive and fun experience for everyone. Upon selection of one of the three available buttons, users will be able to interact with the computer by picking either the rock, paper, or scissors option. As this is an online game, it can be enjoyed alone and by anyone.

<img src= "assets/images/amiresponsiveness.png">

# Table of Contents
1. [Features](#id-features)
2. [Testing](#id-testing) 
3. [Validator Testing](#id-validator)
4. [Bugs](#id-bugs)
5. [Technologies used](#id-tech)
6. [Deployment](#id-deploy)
7. [Credits](#id-credits)
8. [Acknowledgements](#id-acknowledgements)





## Features<div id='id-features'>
* ### The Header
When the user opens the webpage, the website logo is the first image that will catch their attention. It is large and stands out as it identifies the game to them immediately. As they will immediately know what it is that they are going to play once they open the webpage. When creating the logo I thought about the color scheme and decided on white for the text and I used rgb(68, 128, 240) for the background. I feel that this make the logo stand out.<p>&nbsp;</p>   
<img src= "assets/images/rps-logo.png">  

* ### Instructions
The instructions of the game are shown in a few bullet points below the header. This is useful in explaining how the game works if the user is unfamiliar with the game. It also indicates where the game is located within the website. For the body of the project I choose a background colour of rgb(68, 128, 240). I think the header and body colors go well together and complement each other.<p>&nbsp;</p>
<img src = "assets/images/instructions.png" >

* ### Scores
This area is where the computer and users scores are displayed. To win the game it is the first to five and once the number reaches five the display will revert back to zero and the user can start a new game. This is useful to users as it keeps score of the game.<p>&nbsp;</p>
<img src = "assets/images/score.png">

* ### Game area
The game area is the main part of the website as it is where the game takes place. There is a game box with a play game button beneath. This tells the user that they must first make a choice and the computer will then make their choice. It also explains that the first to reach a score of five wins the game. Once the user clicks the play game button both the game box and the play game button will dissappear and the game will begin.<p>&nbsp;</p>
<img src="assets/images/gamearea.png">  

* ### Game 
The game is where the user gets to challenge the computer. THere are three hands rock paper and scissors. The user must choose one and then the computer will then make their choice which is completely at random. There are messages below to deliver the result to the user also while there score subsequently increase.<p>&nbsp;</p>
<img src="assets/images/game.png"> 

* ### Result
Below the game each time the user and computer make their choice a message will be displayed with the result. THe message will tell the user what the computer pick and what the user picked. THe result will tell the user who won that round. After five rounds the result will change to a message either telling the user they have won or that they have  lost.<p>&nbsp;</p>
<img src ="assets/images/message.png"> 

* ### Features Left to Implement
 I think I would definitely add some animations if I were to return to this website in the future. The game would be won or lost by an animation appearing on the screen, which would appear once the computer or user scored five points.


## Testing<div id='id-testing'>

* Search Engines
  * I tested my website on Google Chrome, Safari and Mozilla Firefox. The website appeared as I had intended it to  and performed well on those search engines. I did not encounter bugs or experience any issues.
* Amiresponsive
  * To test my website on all iphone devices I used [am i responsiveness](http://ami.responsivedesign.is/). I added a screenshot of how these look on the top of the Read.me.
  
  
### Tests were performed on the following devices to ensure their responsiveness and to ensure that all the features worked correctly and that there were no unresolved bugs.

* Mobile Phones/Tablet
   * Samsung Galaxy A50

   * Iphone 12
   
   * Apple Ipad.

* Desktop/Laptop
   * Apple Macbook

   * Apple Imac

   * ASUS Chromebook Flip C434


## Validator Testing<div id='id-validator'>

  * Lighthouse
    *  I tested he website on the Lighthouse testing in the chrome dev tools and the results are shown below.  

    <img src = "assets/images/lighthouse.png">


  * Html
    *  There were no errors found when I tested the webpage on the HTML validator.   
        <img src = "assets/images/htmlvalidator.png">
  

  * CSS
    *  There were no errors found when I tested the webpage on the CSS validator.  
            <img src = "assets/images/cssval.png">


  * javaScript
    *  There were no errors found when I tested the webpage on jshint.   
            <img src = "assets/images/jshint.png">

## Bugs<div id='id-bugs'>
   * There was only one problem I encountered while developing this website, and it was not an issue with the website itself. When I first tried to use jshint, I was getting a lot of errors which read "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)." I had no idea what they were about. I Googled it and was unable to find an answer.
   * As a result, I went to Slack see if anyone else had this same issue. Someone was able to help. They explained that I would need to add /*jshint esversion: 6 */ at the top of the page, and then all these errors would be solved.

## Technologies Used<div id='id-tech'>
 * HTML5
 * CSS3 
 * javaScript
 * Gitpod 
 * GitHub 
 * Google Fonts
 * shutterstock
 * Chrome dev tools

## Deployment<div id='id-deploy'>


These are the steps used to deploy the website. The site was deployed using GitHub.
* Create the repository for the website you wish to publish.
* The next step is to push code.
* Then go to the settings.
* Scroll down to Github pages and click on the link.
* Then at the source there is a drop down icon click on this and select main branch.
* The page will refresh with a link to the website. Once the link is selected then website is deployed.

The live link to this website can be found here - https://squirkey89.github.io/Rock-Paper-Scissor-portfolio-project/
 

## Credits<div id='id-credits'>
  * I used Am I Responsive web site for checking responsiveness on all Apple devices screen sizes [am i responsiveness](http://ami.responsivedesign.is/)
  * When coding the project I referenced the [love maths project](https://github.com/Code-Institute-Org/love-running-2.0)
  * To add favicon I watched a tutorial on Dani Krossings YouTube channel here is the code:```link rel="shortcut icon" href="assets/images/android-chrome-192x192.png"```


**Media**
  * All the images used in the website were taken from [shutterstock](.https://www.shutterstock.com/)






