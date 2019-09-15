/*
//
*/

/*
    reduce() method Lightning Exercise 2: Use the reduce method on the following array to build a sentence.
*/
const reduceMethodLE2 = ( outputElement ) => {

    const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

    const sentence = words.reduce(
        ( sentence, currentWord ) => sentence += (" " + currentWord), ""
    )

    console.log( "Sentence: ", sentence )
}

export default reduceMethodLE2
