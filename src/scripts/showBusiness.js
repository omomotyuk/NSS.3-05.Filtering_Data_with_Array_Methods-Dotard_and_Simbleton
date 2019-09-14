/*
//   
*/

// Creates HTML to represent business info
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

export default showBusiness
