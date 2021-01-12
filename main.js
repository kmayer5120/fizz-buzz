/*
 * Author:  Kyle Mayer
 * Program: Fizz buzz
 * Date:    01/12/2021
 * Requirements:
 *      Write an algorithm that runs from 1 to 20.
 *          When the number is even, output 'fizz'.
 *          When the number is divisible by 5, output 'buzz'.
 *          If it is neither even nor divisible by five, output 'foo'.
 */

let fizzBuzz = () => {
    //loop 20 times
    for (let i = 1; i <= 20; i++) {
        //initialize outputWord string variable
        let outputWord = "foo";

        if (i % 2 === 0) {
            //Number is even: fizz
            outputWord = "fizz";
        } else if (i % 5 === 0) {
            //Number is divisible by 5: buzz
            outputWord = "buzz";
        }

        console.log(`Counter: ${i} ---- Word: ${outputWord}`);
    }
}

fizzBuzz();