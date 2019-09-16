/*
//
*/

//import businesses from "./businesses.js"
//import showBisiness from "./showBusiness.js"

//
const outputElement = document.querySelector("#output")

/*
  Lightning Exercise 1: 
  Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.
*/
//import forEachMethod from "./forEach-method.js"
//forEachMethod( outputElement )

/*
  Now you have code to show web pages for each of the businesses that have active accounts. You call Doris over and show her the results, and she's very excited.
  For a task like this, the array filter() method is perfect, because you need to look at each object in the businesses array, check to see if it meets Doris' condition, and if it does, place that object in a new array that only contains the businesses she wants.
*/
//import filterMethod from "./filter-method.js";
//filterMethod( outputElement )

/*
  Using map(), you extract the purchasing agent object from each business and store it in a new array
*/
//import mapMethod from "./map-method.js"
//mapMethod( outputElement )

/*
  find() method
*/
//import findMethod from "./find-method.js"
//findMethod( outputElement )

/*
  reduce() method
*/
//import reduceMethod from "./reduce-method.js"
//reduceMethod( outputElement )

/*
  reduce() method Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.
*/
//import reduceMethodLE1 from "./reduce-method-LE1.js"
//reduceMethodLE1( outputElement )

/*
  reduce() method Lightning Exercise 2: Use the reduce method on the following array to build a sentence.
*/
//import reduceMethodLE2 from "./reduce-method-LE2.js"
//reduceMethodLE2( outputElement )

/*
  Practice: Big Spenders
*/
import bigSpenders from "./big-spenders.js"
bigSpenders( outputElement )
