/*
//
*/

import businesses from "./businesses.js"

//
const showBusiness = ( business ) => {
  return `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
    </section>
  `
}

//
const outputElement = document.querySelector("#output")

/*
  Lightning Exercise 1: 
  Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.
*/
outputElement.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach( business => {
  outputElement.innerHTML += showBusiness( business )
  outputElement.innerHTML += "<hr/>"
});

/*
  Now you have code to show web pages for each of the businesses that have active accounts. You call Doris over and show her the results, and she's very excited.
  For a task like this, the array filter() method is perfect, because you need to look at each object in the businesses array, check to see if it meets Doris' condition, and if it does, place that object in a new array that only contains the businesses she wants.
*/
outputElement.innerHTML = "<hr/>"
outputElement.innerHTML += "<h1>New York Businesses</h1>"

const newYorkBusiness = businesses.filter( business => business.addressStateCode === 'NY' )

newYorkBusiness.forEach( business => {  outputElement.innerHTML += showBusiness( business )
  outputElement.innerHTML += "<hr/>"
})

/*
  Lightning Exercise 2:
  Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM.
*/
outputElement.innerHTML = "<hr/>"
outputElement.innerHTML += "<h1>Manufacturing Businesses</h1>"

const manufacturingBusinesses = businesses.filter( business => business.companyIndustry === 'Manufacturing' )

manufacturingBusinesses.forEach( business => {  outputElement.innerHTML += showBusiness( business )
  outputElement.innerHTML += "<hr/>"
})


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