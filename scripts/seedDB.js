const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/scriptr"
);

const quizSeed = [
    {
        "category": "HTML",
        "question": "What does HTML stand for?",
        "answers": [
            "How The Man Landed",
            "Hyper Text Markup Language",
            "Hyper Text Meaningful Language",
            "Hyper Text Markup Logic"
        ],
        "correctIndex": 2
    },
    {
        "category": "HTML",
        "question": "What is an individual block of HTML called?",
        "answers": [
            "Div",
            "Tag",
            "Element",
            "Block"
        ],
        "correctIndex": 3
    },
    {
        "category": "HTML",
        "question": "What does the tag '<p>' do?",
        "answers": [
            "Creates a paragraph of text",
            "Creates padding around a block",
            "Indents a block of text",
            "Makes a period at the end of a sentence"
        ],
        "correctIndex": 1
    },
    {
        "category": "HTML",
        "question": "What is a '<div>'?",
        "answers": [
            "A way to divide one number with another number",
            "A block of text",
            "A shape",
            "A block of HTML that acts as a simple container"
        ],
        "correctIndex": 4
    },
    {
        "category": "HTML",
        "question": "Select the correct closing tag for <span>",
        "answers": [
            "/<span>",
            "</span>",
            "<span/>",
            "<span>/"
        ],
        "correctIndex": 2
    },
    {
        "category": "HTML",
        "question": "Which of the following is the largest heading size by default?",
        "answers": [
            "h0",
            "h6",
            "h1",
            "h10"
        ],
        "correctIndex": 3
    },
    {
        "category": "HTML",
        "question": "The ____ element tag is used to add an image.",
        "answers": [
            "<jpg>",
            "<a>",
            "<pic>",
            "<img>"
        ],
        "correctIndex": 4
    },
    {
        "category": "CSS",
        "question": "What does CSS stand for?",
        "answers": [
            "Cooperative Standard Styling",
            "Creative Style Syntax",
            "Colorful Special Styling",
            "Cascading Style Sheets"
        ],
        "correctIndex": 4
    },
    {
        "category": "CSS",
        "question": "The CSS syntax to style all `<p>` elements to appear bold is:",
        "answers": [
            "p { font-weight: bold; }",
            "p ( font-weight = bold );",
            "p [ font-weight: bold ]",
            "p font-weight: bold;"
        ],
        "correctIndex": 1
    },
    {
        "category": "HTML",
        "question": "Which of the following is treated as a block element?",
        "answers": [
            "<img>",
            "<p>",
            "<a>",
            "<link>"
        ],
        "correctIndex": 2
    },
    {
        "category": "CSS",
        "question": "We can align a block element to the left or right of the screen using the ____ CSS property.",
        "answers": [
            "align",
            "float",
            "left",
            "justify"
        ],
        "correctIndex": 2
    },
    {
        "category": "CSS",
        "question": "____ positioning moves elements in relation to their original/default location.",
        "answers": [
            "Absolute",
            "Negative",
            "Relative",
            "Exact"
        ],
        "correctIndex": 3
    },
    {
        "category": "CSS",
        "question": "The CSS property ____ allows us to layer elements above and below each other.",
        "answers": [
            "z-level",
            "h-index",
            "h-level",
            "z-index"
        ],
        "correctIndex": 4
    },
    {
        "category": "CSS",
        "question": "____ positioning helps place elements relative to their nearest positioned ancestor element.",
        "answers": [
            "Absolute",
            "Negative",
            "Relative",
            "Exact"
        ],
        "correctIndex": 1
    },
    {
        "category": "CSS",
        "question": "The `display: none` property allows us to:",
        "answers": [
            "prevent pop-up windows",
            "close the browser",
            "hide an element",
            "remove all images only"
        ],
        "correctIndex": 3
    },
    {
        "category": "CSS",
        "question": "An HTML file is loading file1.css and file2.css, with file1.css linked before file2.css. The file1.css file lists a class with a font size of 10px. The file2.css file lists the same class but with a font size of 15px. Which CSS file will take precedence in determining the font size for that class?",
        "answers": [
            "The file1.css file linked in the HTML file",
            "The file2.css file linked in the HTML file",
            "The CSS file with the highest number in the name",
            "None of them - it will cause an error"
        ],
        "correctIndex": 2
    },
    {
        "category": "CSS",
        "question": "CSS Resets are an important tool for:",
        "answers": [
            "creating cross browser compatibility",
            "preventing browser crashes",
            "stopping the spread of malware",
            "avoiding website hacking"
        ],
        "correctIndex": 1
    },
    {
        "category": "CSS",
        "question": "Keywords added to CSS selectors that specify a special state of an element are called:",
        "answers": [
            "primary-selectors",
            "main-ids",
            "state-elements",
            "pseudo-classes"
        ],
        "correctIndex": 4
    },
    {
        "category": "CSS",
        "question": "A primary reason for using CSS Frameworks like Bootstrap is to:",
        "answers": [
            "save significant time building a website",
            "avoid typos and errors in the code",
            "allow better collaboration among developers",
            "make websites perform faster"
        ],
        "correctIndex": 1
    },
    {
        "category": "CSS",
        "question": "____ are used to help create mobile responsive websites.",
        "answers": [
            "Media queries",
            "Browser logs",
            "Size requests",
            "Specialized browsers"
        ],
        "correctIndex": 1
    },
    {
        "category": "HTML",
        "question": "____ refers to the display being used to view a website.",
        "answers": [
            "Browser",
            "Viewport",
            "Displayport",
            "Screen"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "Variables can be declared in JavaScript using the ____ keyword.",
        "answers": [
            "var",
            "value",
            "val",
            "variable"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "Commonly used data types DO NOT include:",
        "answers": [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "String values must be enclosed within ____ when being assigned to variables.",
        "answers": [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "answers": [
            "JavaScript",
            "terminal / bash",
            "for loops",
            "console.log"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "We can ask a user for their name by using ____ popup box in the browser.",
        "answers": [
            "a confirm",
            "an alert",
            "an ask",
            "a prompt"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "We can use JavaScript to directly write to the HTML page itself by using:",
        "answers": [
            "console.log",
            "document.write",
            "variables",
            "This is not possible with JavaScript"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "If / Else statements are best suited for ____.",
        "answers": [
            "making decisions",
            "setting up arrays",
            "interacting with users",
            "performing calculations"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "The condition in an if / else statement is enclosed within ____.",
        "answers": [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "Arrays in JavaScript can be used to store ____.",
        "answers": [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "The specific element stored within an array can be targeted using the element ____.",
        "answers": [
            "value",
            "index",
            "location",
            "length"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "We can get the number of elements in an array using the ____ property.",
        "answers": [
            "count",
            "size",
            "variable",
            "length"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "We can run repeated blocks of code using ____.",
        "answers": [
            "for loops",
            "if / else statements",
            "arrays",
            "browser refresh"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "We can check to see if two values are equal using ____.",
        "answers": [
            "?==",
            "!==",
            "===",
            "="
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "The counter variable in a for loop is also known as the ____.",
        "answers": [
            "iterator",
            "condition",
            "return",
            "block"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "We can hook onto the event of a user pressing and releasing a key by referring to ____.",
        "answers": [
            "browser.event",
            "page.hit",
            "event.key",
            "document.onkeyup"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "We can get the key a user has pressed by referencing ____.",
        "answers": [
            "document.onkeyup",
            "letter.pressed",
            "keyboard.event",
            "event.key"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "We can find a single element on the page that has an ID by using ____.",
        "answers": [
            "browser.findAllElements",
            "document.getElementById",
            "clicked.getHTMLById",
            "document.ElementsByClass"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "Elements can be added to an array by using the ____ method.",
        "answers": [
            "push",
            "add",
            "concatenate",
            "attach"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "Repetitive lines of code should be bundled together as ____ and then executed as needed.",
        "answers": [
            "arrays",
            "functions",
            "snippets",
            "conditions"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "A function's ____ are only visible inside the function body.",
        "answers": [
            "arguments",
            "arrays",
            "strings",
            "definitions"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "To grab the first letter of a string we can use the ____ method.",
        "answers": [
            "stringItem(0)",
            "itemIs(1)",
            "charAt(0)",
            "indexOf(1)"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "In order to actually execute a function we have written, we have to ____ it.",
        "answers": [
            "run",
            "call",
            "maximize",
            "mark"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "When defining an object, its property-value pairs are enclosed within ____.",
        "answers": [
            "parentheses",
            "curly brackets",
            "colons",
            "square brackets"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "In terms of objects, how would one use bracket notation to refer to a value that is not a variable?",
        "answers": [
            "object['property']",
            "object(property)",
            "object('property')",
            "object-property"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "In terms of objects, how would one use dot notation to refer to a value?",
        "answers": [
            "object.[property]",
            "property.object",
            "object.property",
            "property.[object]"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "The ____ keyword is simply a way to reference the object itself.",
        "answers": [
            "object",
            "item",
            "it",
            "this"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "Functions that are properties of objects are also known as ____.",
        "answers": [
            "steps",
            "tasks",
            "methods",
            "functions"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "Variables that we can refer to everywhere are known as ____ variables.",
        "answers": [
            "global",
            "permanent",
            "eternal",
            "primary"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "What is another JavaScript method that is used to loop over arrays or Objects?",
        "answers": [
            "loopOver",
            "readAll",
            "$.each",
            "forEach"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "Effectively, the ____ is the version of HTML / CSS interpreted by the browser.",
        "answers": [
            "DOM",
            "program",
            "debugger",
            "console"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "Without using jQuery, HTML elements on a page can be populated using the ____ property.",
        "answers": [
            ".text()",
            "innerHTML",
            "div",
            "script"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "Without using jQuery, we can code a new div with the following:",
        "answers": [
            "createElement('div')",
            "$('&lt;div&gt;')",
            "makeDivElement()",
            "createNew('div')"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "Once a new div has been coded, it can be attached to an element on the page with the ____ JavaScript method.",
        "answers": [
            "placeDiv",
            "appendChild",
            "createPosition",
            "setElement"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "Without using jQuery, a CSS style of an element can be manipulated using the ____ method.",
        "answers": [
            "adjustCSS",
            ".css()",
            "setAttribute",
            "setStyle"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "Without using jQuery, a CSS style of an element can be manipulated using the ____ method.",
        "answers": [
            "adjustCSS",
            ".css()",
            "setAttribute",
            "setStyle"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "jQuery is a cross-platform JavaScript ____ for easier client-side scripting.",
        "answers": [
            "command",
            "template",
            "table",
            "library"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "jQuery can be useful for tasks such as:",
        "answers": [
            "Dynamically inserting, updating, or removing HTML",
            "Registering click or other change events",
            "Downloading data from databases",
            "All of the above"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "A div with the id of myDiv can be targeted using jQuery by typing:",
        "answers": [
            "$('#myDiv')",
            "$(.myDiv)",
            "$('myDiv')",
            "$div"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "A new button can be created using jQuery and assigned to a variable using the following code:",
        "answers": [
            "var newButton = $newButton;",
            "var newButton = $('<button>');",
            "var newButton = create.button;",
            "var newButton = button('new')"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "A new button can be created using jQuery and assigned to a variable using the following code:",
        "answers": [
            ".loop",
            ".iterate",
            ".every",
            ".each"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "____ makes sure that our JavaScript code doesn't get run until the HTML document is finished loading.",
        "answers": [
            "document.ready",
            "page.loaded",
            "document.complete",
            "process.ended"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "We can use jQuery to create a listener that listens for a click on all elements with the class myClass using:",
        "answers": [
            "$('.myClass').on('click', function() { ... });",
            "$('.myClass').on(function() { ... });",
            "$'.myClass').on('press', function() { ... });",
            "$('.myClass').on(clickMe!, function() { ... });"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "To attach an element to the beginning of another element, we can use the ____ jQuery method.",
        "answers": [
            ".append",
            ".attach",
            ".start",
            ".prepend"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "Writing ____ is equivalent to writing $() when using the jQuery library.",
        "answers": [
            "jQuery()",
            "select()",
            "click()",
            "library()"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "The _____ jQuery method can be used to place attributes on HTML elements",
        "answers": [
            ".attribute",
            ".append",
            ".attr",
            ".info"
        ],
        "correctIndex": 3
    },
    {
        "category": "JS",
        "question": "We can give classes to elements using the ____ jQuery method.",
        "answers": [
            ".addClass",
            ".giveClass",
            ".setClass",
            ".attrClass"
        ],
        "correctIndex": 1
    },
    {
        "category": "JS",
        "question": "A button with an id of myButton can be set to have its displayed name show as 'SuperButton' with the following jQuery code:",
        "answers": [
            "$('#myButton').name('SuperButton');",
            "$('#myButton').text('SuperButton');",
            "$('#myButton').set('SuperButton');",
            "$#myButton('SuperButton');"
        ],
        "correctIndex": 2
    },
    {
        "category": "JS",
        "question": "In JavaScript, ____ functions can access ____ variables, but not vice versa.",
        "answers": [
            "parent, child",
            "all, child",
            "parent, all",
            "child, parent"
        ],
        "correctIndex": 4
    },
    {
        "category": "JS",
        "question": "In JavaScript, ____ functions can access ____ variables, but not vice versa.",
        "answers": [
            "parent, child",
            "all, child",
            "parent, all",
            "child, parent"
        ],
        "correctIndex": 4
    },
    

];

db.scriptr
    .remove({})
    .then(() => db.scriptr.collection.insertMany(quizSeed))
    .then(data => {
        console.log(data.result.n + " questions inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });