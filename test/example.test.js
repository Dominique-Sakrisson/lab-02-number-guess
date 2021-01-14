// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers, calcRemainingGuesses } from "../utils.js";

const test = QUnit.test;
//test compare numbers
test('if passed the arguments 1 and 2 the test should return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
//test compare numbers
test('if passed the arguments 2 and 2 the test should return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
//test compare numbers
test('if passed the arguments 2 and 1 the test should return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
//test calcRemainingGuesses
test('if passed the arguments 2 and 1 the test should return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
//test calcRemainingGuesses
test('if passed the arguments 5 and 1 the test should return 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcRemainingGuesses(5, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
//test calcRemainingGuesses
test('if passed the arguments 1 and 10 the test should return -9', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcRemainingGuesses(1, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
//test displayRemainingGuesses
test('if passed the arguments 1 and 10 the test should return -9', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcRemainingGuesses(1, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});