/*
//
*/

import businesses from "./businesses.js"
import showBusiness from "./showBusiness.js"

/*
    Function to produce a report that list only the companies that have placed an order for more than nine thousand dollars.
*/
const bigSpenders = ( outputElement ) => {

    outputElement.innerHTML = "<h1>Big Spenders: companies with total orders for more than nine thousand dollars</h1>"
    outputElement.innerHTML += "<hr/>"
    
    const showTotalOrders = ( business,totalOrders ) => {
        return `
            <h2>
                ${business.companyName} ($${totalOrders})
            </h2>
            <section>
                ${business.addressFullStreet}
            </section>
            <section>
                ${business.addressCity},
                ${business.addressStateCode}
                ${business.addressZipCode}
            </section>
        `
    }

    businesses.forEach( business => {
        /* CALCULATE ORDER SUMMARY */
        let totalOrders = business.orders.reduce(
            (currentTotal, nextValue) => currentTotal += nextValue, 0
        )

        if( totalOrders > 9000 ) {
            outputElement.innerHTML += showTotalOrders( business,totalOrders )
            outputElement.innerHTML += "<hr/>"
        }
    })
}

export default bigSpenders
