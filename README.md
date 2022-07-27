
# Practising-JavaScript

### Some JS exercises:

1. Life In Weeks
2. BMI Calculator (2.1)
3. Love Calculator
4. Leap Year
5. Who's Buying Lunch
6. 99 Bottles
7. Fibonacci Sequence

### Topics learned:

- Chrome Developer tools > Sources > Snippets (for multi-line code)
- `alert()`
- `typeof()`
- `prompt()`
- `console.log()`
- Data types (String, Number, Boolean)
- Variables (`var`, naming conventions)
- String
  - String concatenation
  - `name.length`
  - `name.slice(x,y)`
  - `name.toUpperCase()`
  - `name.toLowerCase()`
- Functions
  - No arguments, no return values
  - Arguments, no return values
  - Arguments, return values
- `Math.pow(x, y)`
- `Math.round(x)`
- `Math.random()`
- `Math.floor(x)`
- Control statements (if-else)
- Comparators and Equality (=== v/s ==)
- Logical operators (&&, ||, !)
- Arrays
  - `var arr = ["A", 'Z', 1, true];`
  - `arr.length`
  - `arr.includes("A")` // returns true/false
  - `arr.push(0)` // adds an element to the end of arr
  - `arr.pop` // deletes the last array element
- Loops
  - `while(<condition>){}` (used while program is in a particular state)
  - `for(var i = 0; i < 2; i++){}` (used to iterate a fixed no. of times)

<hr>

- Adding JS to Websites
  - Inline, internal, external JS (`<script src="index.js"></script>`)
- Document Object Model (DOM)
  - HTML elements are treated as *objects*
  - document -> html -> (head -> title, body -> h1...)
  - `document.firstElementChild`, `document.lastElementChild`, `.innerHTML`, `.style.color`, `document.querySelector("input").click()`
  - Objects (HTML elements) have: ***Properties*** (Get properties, Set properties), ***Methods*** (Call methods)
  - Properties describe something about the object. Methods are the things the object can do.
  - `document.getElementsByTagName("li")`, `document.getElementsByClassName("btn")` (both return an array)
  - `document.getElementById("title")` (returns 1 element since ID's are unique in one document)
  - `document.querySelector(".btn")` (returns 1 element, argument is a selector)
    - In case of multiple objects, 1st object is returned
  - `document.querySelectorAll(".btn")` (returns an array)
  - **Manipulating styles**: `.style`, camelCase used for properties, "" used for values (NOT RECOMMENDED TO USE)
  - `.classList.add("<className>")`, `.classList.remove("<className>")`, `.classList.toggle("<className>")` AND add styles to specific class in the stylesheet
  - **Manipulating text**: Diff. b/w `.innerHTML` (HTML code inside the selected object) and `.textContent` (only the text in the selected object)
  - **Manipulating HTML element attributes**: `.attributes`, `.getAttribute("href")`, `.setAttribute("href", "https://www.github.com")`

- Advanced JS and DOM Manipulation
  - Event Listeners (`.addEventListener("click", <function name>)` OR `.addEventListener("click", function (){//code})`) (anonymous function)
  - $0 refers to selected element
  - `debugger;` and `calculator(2,3,add);` in Chrome Dev Tools
  - Functions with functions as input -> Higher Order Functions
  - `Audio()`, `.play()`
  - `this` refers to the HTML element which triggers the event listener
  - `var bellBoy1 = {name: "Tom", age: "24"}` | `function BellBoy (name, age){this.name = name; this.age = age}`, `var bellBoy1 = new BellBoy("Tom", 24);`
  - switch statement
  - `this.play = function(){//code}`
  
  




