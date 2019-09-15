/*
//
*/

import businesses from "./businesses.js"
import showBusiness from "./showBusiness.js"

const reduceMethod = ( outputElement ) => {

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
        // forEach version:
        /*let totalOrders = 0
        business.orders.forEach( order => totalOrders += order )*/

        // reduce version:
        let totalOrders = business.orders.reduce(
            (currentTotal, nextValue) => currentTotal += nextValue,
            0
        )

        outputElement.innerHTML += showTotalOrders( business,totalOrders )
        outputElement.innerHTML += "<hr/>"
    })
}

export default reduceMethod
