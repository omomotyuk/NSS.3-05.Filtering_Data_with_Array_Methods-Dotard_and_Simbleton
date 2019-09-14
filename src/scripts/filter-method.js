/*
//
*/

import businesses from "./businesses.js"
import showBusiness from "./showBusiness.js"

const filterMethod = ( outputElement ) => {
    outputElement.innerHTML = "<h1>New York Businesses</h1>"

    const newYorkBusiness = businesses.filter( business => business.addressStateCode === 'NY' )
    
    newYorkBusiness.forEach( business => {  outputElement.innerHTML += showBusiness( business )
        outputElement.innerHTML += "<hr/>"
    })
    
    /*
      Lightning Exercise 2:
      Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM.
    */
    outputElement.innerHTML += "<h1>Manufacturing Businesses</h1>"
    
    const manufacturingBusinesses = businesses.filter( business => business.companyIndustry === 'Manufacturing' )
    
    manufacturingBusinesses.forEach( business => { outputElement.innerHTML += showBusiness( business )
        outputElement.innerHTML += "<hr/>"
    })
}

export default filterMethod
