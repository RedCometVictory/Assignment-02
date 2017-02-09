        //tabbed panels
        //window references a document window on the current page itself; 
        //an object such as the black outlined panel on the page.
        
        //Onload respresents an event, a function that occurs once the page is finished loading.
       
        //Everything within the curly braces executes. Much like syntax.
        //Used to basically group code together that executes when the function is run.
        //This is also know as an anonymous function. It has no name, but still does something.
        
        //declare globals to hold all the links and all the panel elements
        
        /* Create variable to hold all tabs (links) and a variable to hold all 
            of my panels. They will be controlled through scripting and thus 
            need a way to be referenced. Do so with a variable. 
            A variable can essentially be anything you want. As they store 
            whatever information or objects put insode of it. */
        //The tab links variable will contain all of our tabs and the tab panels 
        //variable will contain all of our variables. Follow DOM (Document Object Modeling.)
var tabLinks;
var tabPanels;
        /*     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     */
window.onload = function() {
            //set initial panel state
            //listen for clicks on tabs
            //tabLinks (variable) is an ARRAY as we are storing multiple object into a single variable (as in the list items).
            //Equals = is an assignment operator.
            
            //when page loads get all li elements
    tabLinks = document.getElementById("tabs").getElementsByTagName("li");
            /* document (that’s the current open document) then .getElementById 
               (this is what’s called dot notation). This is a way of scripting 
               that basically lets us reference objects and use what we call 
               methods to manipulate those objects. So, this OBJECT is the "document" 
               itself, and then we're using a METHOD called "getElementById" */
            
            /* 
            
               tabLinks = document.getElementById("tabs").getElementsByTagName("li");
               
               Essentially [document] means go into the open document, find an 
               element that has an ID of tabs [.getElementById("tabs")]. 
               Inside that, retrieve any elements that have a tag name of list item
               [.getElementsByTagName("li")], or give me all the list items inside of 
               that. So that's exactly what this is doing. And it's storing them in 
               the variable "tablinks" (which is also the Object in this case; this is DOM).
            
            */
            
            //now get all tab panel container divs
    tabPanels = document.getElementById("containers").getElementsByTagName("div");
            //THESE ARE BOTH GLOBAL VARIABLES! (tabLinks and tabPanels)
        
            //activate the_first_one
    displayPanel(tabLinks[0]);//sets off initial panel display upon page load.
            //This function [displayPanel] is fired off in order to display the active 
            //tab and the active panel. When calling the [displayPanel] function we 
            //then pass arguments [(tablinks[0])] into the function.

            //JavaScript starts counting at 0 (and we have 3 tabs). 
            //So 0 is asking for the first one.
            //1 would be the second one. 2 would be the third one.
            //

            /*
            Responding to an event. Essentailly JavaScript listens for something 
            to happen. 
            Once it does happen, a function occurs (something is done).
            */
            
             /* 
              This is called a for loop. It creates an initial variable called i, 
              and it starts at 0. As long as i is less than 
              the number of tabLinks, meaning the number of tabs, list items, 
              then take i and add one to it. And then it will execute the code found 
              inside these curly braces. So it's going to go one, two, three, until 
              it runs out of tabs, and then it's going to stop running. It will 
              execute as many times as we have tabs. 
             */
            //attach event listener to links using onclick and onfocus, 
            //fire the displayPanel function, return false to disable the link
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function() {//this is the event listener for tabLinks
                    //(this) refers to calling function [i]
            displayPanel(this);//displayPanel is function; runs on click
            return false;//disables link that is clicked
                    /*
                     So what we're saying is, tab links, and then this i. This i is 
                     the same variable as this one [i < tabLinks...]. So we're 
                     starting at 0, and then 1, and then 2. Remember, it's an array, 
                     so they count, start counting at 0. So 0 would say the first one, 
                     1 would be the second one, 2 would be the third one, and we know 
                     it's going to execute three times.
                    */
                 
        }
        tabLinks[i].onfocus = function() {
            displayPanel(this);
            return false;
                    
                    /*
                    When people click on it with a mouse and onclick registers. 
                    Onfocus registers if one of those tabs has focus placed on it any 
                    other way. And this is for people that might be using a keyboard 
                    for example. Since that's a link, they can tab to that. So, for 
                    somebody that might be using assisted technology and maybe can't 
                    use a mouse, it's still making sure that my tab panels work for 
                    those guys
                    */
        }
                
    }
            
}        
        
        
        //You can name your own funtion, but keep it camelCase.
        //Best to name functions in ways that describe what they do.
        //This is a name function that is executed whenever it is called by its function name.
function displayPanel(tabToActivate) {
            //go through all the <li> elements
			//respond to tab clicks
            //change panel display and activate tabs
    for (var i = 0; i < tabLinks.length; i++) {
	    if (tabLinks[i] == tabToActivate) {
				    //if it is the one to acitvate, change its class
			tabLinks[i].classList.add("activate");
					//and display the corresponding panel
			tabPanels[i].style.display = "block";
		} else {
				    //remove the active class on the link
			tabLinks[i].classList.remove("active");
					//hide the panel
			tabPanels[i].style.display = "none";
		}
	}
}