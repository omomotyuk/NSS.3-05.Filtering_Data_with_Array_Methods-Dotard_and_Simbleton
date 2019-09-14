/*
//
*/

import businesses from "./businesses.js"
import showBusiness from "./showBusiness.js"

const findMethod = ( outputElement ) => {

//outputElement.innerHTML = "<h1>Find a Match</h1>";

    const showResult = ( foundBusiness ) => {
        return `
            <h2>
            ${foundBusiness.companyName}
            </h2>
            <section>
            ${foundBusiness.addressFullStreet}

            </section>
            <section>
            ${foundBusiness.addressCity},
            ${foundBusiness.addressStateCode}
            ${foundBusiness.addressZipCode}
            </section>
        `
    }
  
    document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.toLowerCase().includes( keyPressEvent.target.value.toLowerCase() )
            );

            outputElement.innerHTML = showResult( foundBusiness );
        }
    });

    /*
        Lightning Exercise 1: Refactor your code to search for purchasing agents instead. If the search text is found in the first name of any purchasing agent, show that agent.
        Lightning Exercise 2: Refactor your code so that if the search text is found in the first name, or last name, of any purchasing agent, show that agent.
    */
}

export default findMethod
