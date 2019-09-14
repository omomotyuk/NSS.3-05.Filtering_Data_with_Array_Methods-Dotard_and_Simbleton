/*
//
*/

import businesses from "./businesses.js"
import showBusiness from "./showBusiness.js"

/*
  Lightning Exercise 1: 
  Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.
*/
const forEachMethod = ( outputElement ) => {
    outputElement.innerHTML = "<h1>Active Businesses</h1>"

    businesses.forEach( business => {
        outputElement.innerHTML += showBusiness( business )
        outputElement.innerHTML += "<hr/>"
    })
}

export default forEachMethod
