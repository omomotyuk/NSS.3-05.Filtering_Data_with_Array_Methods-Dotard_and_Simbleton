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
import mapMethod from "./map-method.js"
mapMethod( outputElement )

/*
  find-method
*/
//import findMethod from "./find-method.js"
//findMethod( outputElement )

/*
  reduce-method
*/
//import reduceMethod from "./reduce-method.js"
//reduceMethod( outputElement )



/*
    {
      purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      addressZipCode: "56839",
      addressStateCode: "WI",
      addressFullStreet: "8417 Franklin Court Tunnel",
      addressCity: "Mouthcard"
    },
*/