/*
//
*/

import businesses from "./businesses.js"
import showBusiness from "./showBusiness.js"

const reduceMethod = ( outputElement ) => {
    
    businesses.forEach(business => {
        /* CALCULATE ORDER SUMMARY */
        let totalOrders = 0
        business.orders.forEach(order => totalOrders += order)
    
    
        outEl.innerHTML += `
            <h2>
                ${business.companyName}
                ($${totalOrders})
            </h2>
            <section>
                ${business.addressFullStreet}
            </section>
            <section>
                ${business.addressCity},
                ${business.addressStateCode}
                ${business.addressZipCode}
            </section>
        `;
        outEl.innerHTML += "<hr/>";
    });
}

export default reduceMethod
