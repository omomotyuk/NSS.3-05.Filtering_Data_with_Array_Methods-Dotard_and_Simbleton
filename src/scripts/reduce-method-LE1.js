/*
//
*/

/*
    reduce() method Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.
*/
const reduceMethodLE1 = ( outputElement ) => {

    const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
    
    let totalRainfall = monthlyRainfall.reduce(
        ( totalRain, currentValue ) => totalRain += currentValue, 0
    )
    
    console.log( "Total rain fell: ", totalRainfall )
}

export default reduceMethodLE1
