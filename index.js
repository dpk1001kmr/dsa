import { differenceOfTwoArray } from "./array/differenceOfTwoArray.js";
import { linearSearch } from "./array/linearSearch.js";
import { printBarChart } from "./array/printBarChart.js";
import { spanOfArray } from "./array/spanOfArray.js";
import { sumOfTwoArray } from "./array/sumOfTwoArray.js";
import { countDigits } from "./basics/countDigits.js";
import { digitFrequency } from "./basics/digitFrequency.js";
import { gcd } from "./basics/gcd.js";
import { grading } from "./basics/grading.js";
import { inverseOfNumber } from "./basics/inverseOfNumber.js";
import { isPrime } from "./basics/isPrime.js";
import { isPythagoreanTriplets } from "./basics/isPythagoreanTriplets.js";
import { lcm } from "./basics/lcm.js";
import { printDigitsOfNumber } from "./basics/printDigitsOfNumber.js";
import { printDigitsOfNumberInReverse } from "./basics/printDigitsOfNumberInReverse.js";
import { printFibonacciTill } from "./basics/printFibonacciTill.js";
import { printPrimeBetween } from "./basics/printPrimeBetween.js";
import { printPrimeFactor } from "./basics/printPrimeFactor.js";
import { rotateNumber } from "./basics/rotateNumber.js";
import { LinkedList } from "./linkedlist/linkedlist.js";
import { printMazePath } from "./printMazePath.js";
import { allIndices } from "./recursion/allIndices.js";
import { factorial } from "./recursion/factorial.js";
import { firstIndex } from "./recursion/firstIndex.js";
import { floodFill } from "./recursion/floodFill.js";
import { keypadCombination } from "./recursion/keypadCombination.js";
import { lastIndex } from "./recursion/lastIndex.js";
import { maxOfArray } from "./recursion/maxOfArray.js";
import { mazePath } from "./recursion/mazePath.js";
import { mazePathWithJump } from "./recursion/mazePathWithJump.js";
import { minOfArray } from "./recursion/minOfArray.js";
import { power } from "./recursion/power.js";
import { printArray } from "./recursion/printArray.js";
import { printArrayReverse } from "./recursion/printArrayReverse.js";
import { printDecreasing } from "./recursion/printDecreasing.js";
import { printDecreasingIncreasing } from "./recursion/printDecreasingIncreasing.js";
import { printIncreasing } from "./recursion/printIncreasing.js";
import { printKeypadCombination } from "./recursion/printKeypadCombination.js";
import { printMazePathWithJump } from "./recursion/printMazePathWithJump.js";
import { printPermutation } from "./recursion/printPermutation.js";
import { printStairPath } from "./recursion/printStairPath.js";
import { printSubsequence } from "./recursion/printSubsequence.js";
import { printZigZag } from "./recursion/printZigZag.js";
import { stairPath } from "./recursion/stairPath.js";
import { subsequence } from "./recursion/subsequence.js";
import { toh } from "./recursion/toh.js";
import { balancedBracket } from "./stack/balancedBracket.js";
import { duplicateBracket } from "./stack/duplicateBracket.js";
import { Stack } from "./stack/stack.js";

/**
 * ********** basics **********
 */

// console.log(grading(75));
// console.log(isPrime(7));
// printPrimeBetween(1000, 2000);
// printFibonacciTill(10);
// console.log(countDigits(561906700));
// printDigitsOfNumber(1001);
// printDigitsOfNumberInReverse(10101010);
// console.log(inverseOfNumber(312465));
// console.log(rotateNumber(12345, 2));
// console.log(gcd(24, 32));
// console.log(lcm(32, 24));
// printPrimeFactor(240);
// console.log(isPythagoreanTriplets(3, 4, 5));
// console.log(digitFrequency(252221224322222, 2));

/**
 * ********** array **********
 */

// console.log(spanOfArray([1, 2, 3, 4, 5]));
// console.log(linearSearch([1, 2, 3, 4, 5], 3));
// printBarChart([5, 3, 7, 2, 1, 6, 4]);
// console.log(sumOfTwoArray([9, 0, 9], [6, 9, 8, 8]));
// console.log(differenceOfTwoArray([1, 0, 0, 0, 0, 0], [1]));

/**
 * ********** stack **********
 */

// const stack = new Stack();
// console.log(stack);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// console.log(stack);
// console.log(stack.length());
// console.log(stack.top());
// stack.pop();
// stack.pop();
// console.log(stack.pop());
// console.log(stack);
// console.log(stack.length());
// console.log(stack.top());
// console.log(duplicateBracket("(a+b)*((a-b))"));
// console.log(balancedBracket("[(a+b)+{(c+d)*(e/f)}]"));

/**
 * ********** recursion **********
 */

// printIncreasing(5);
// printDecreasing(5);
// printZigZag(3);
// printDecreasingIncreasing(5);
// console.log(factorial(6));
// console.log(power(2, 5));
// toh(4, "A", "B", "C");
// printArray([1, 2, 3, 4, 5], 0);
// printArrayReverse([1, 2, 3, 4, 5], 0);
// console.log(maxOfArray([1, 20, 5, 30, 40], 0));
// console.log(minOfArray([10, 20, 5, 30, 40], 0));
// console.log(firstIndex([1, 2, 3, 4, 2, 5, 6], 0, 4));
// console.log(lastIndex([1, 2, 3, 4, 2, 5, 6], 0, 2));
// console.log(allIndices([1, 2, 3, 4, 2, 5, 2, 6, 2], 0, 2, 0));
// console.log(subsequence("abcde"));
// console.log(keypadCombination("19"));
// console.log(stairPath(7));
// console.log(mazePath(1, 1, 3, 3));
// console.log(mazePathWithJump(1, 1, 3, 3));
// printSubsequence("abcd", "");
// printKeypadCombination("123", "");
// printStairPath(5, "");
// printMazePath(1, 1, 3, 3, "");
// printMazePathWithJump(1, 1, 3, 3, "");
// printPermutation("12345", "");

// const maze = [
//   [0, 1, 0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 0, 0, 1],
//   [0, 0, 0, 1, 1, 1, 0],
//   [0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 1, 0, 1, 0, 0],
// ];

// const visited = [
//   [false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false],
// ];

// floodFill(maze, 0, 0, "", visited);

/**
 * ********** linkedlist **********
 */

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
// linkedList.removeFirst();
// console.log(linkedList.getFirst());
// console.log(linkedList.getLast());
// console.log(linkedList.getAt(3));
// linkedList.addFirst(10);
// linkedList.addFirst(1);
// linkedList.addAt(3, 10);
// linkedList.removeLast();
// linkedList.removeAt(3);
// console.log(linkedList.length());
linkedList.display();
