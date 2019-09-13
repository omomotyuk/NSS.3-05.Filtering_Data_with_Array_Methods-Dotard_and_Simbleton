/*
//
*/

import businesses from "./businesses.js"

/*
Lightning Exercise 1: 
Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.
*/

//
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});
