# cookie-clicker
Create a simple cookie clicker!

## Objective
Learning simple HTML, CSS and JS - Using **HTML, DOM, JavaScript Functions** and more!

## To Do
### Part 1
File Creation
* *Optional:* fork the repository
* Either using the command line or repl.it  create a file structure including the following...
    * index.html
    * styles.css
    * app.js
* Link all of the files above together correctly

### Part 2
HTML (index.html)
* create a ```div``` with the id of "container"
    *within the div create...*
    1. a ```h1``` with the title of the page
    2.  a ```h2``` with the text "Clicks: "
        * within the h2, nest a ```span```
        * give the ```span``` and id of "clicks"
    3. a ```button``` that the user will click
        * make the button have the attribute ```onclick``` for the function ==clicked()==


### Part 3
CSS (styles.css)
* *Optional:* on the ```body``` align the text to the center
    * *styling the rest of the page is optional*

### Part 4
JavaScript (app.js)
1. create a new ```variable``` called "click_change" that will store the element "clicks"
    * *HINT: Use the id of the element*
2. create a new ```variable``` called "count" that will store value 0
3. create the ```function``` called "clicked"
    * increase the ```variable``` "count" by 1
    * change the value of the the ```variable``` "clicks" ```innerHTML``` to reflect the current value of count

## Stretch Goals
1. Make the ```button``` a *literal* cookie
    * change the button to have an image of a cookie
2. Create a Clicks Per Second Counter (CPS)
    * Calculate using the JS function ```setTimeout```
    * *NOTE: clicks per second is determined by number of clicks/time in seconds*
3. Style the rest of the page

## Resources
* **Slides:** https://docs.google.com/presentation/d/1lq18aaoVwUwZBkmLulYIGzspATIeqP4HYL0H-j4oaUs/
* **Replit:** [repl.it](repl.it)

##### HTML
* HTML *w3schools*: https://www.w3schools.com/html
* onclick event listener: https://www.w3schools.com/jsref/event_onclick.asp

##### CSS
* CSS *w3schools*: https://www.w3schools.com/css
* Google Fonts: https://fonts.google.com/
    * Google Fonts Tutorial: https://www.w3schools.com/howto/howto_google_fonts.asp

##### JS
* JS *w3schools*: https://www.w3schools.com/js/
* getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
* innerHTML: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
* SetTimeout: https://www.w3schools.com/jsref/met_win_settimeout.asp
