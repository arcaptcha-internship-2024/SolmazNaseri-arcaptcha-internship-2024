# JavaScript Array Methods Documentation

This document provides detailed information about various methods available in JavaScript's `Array` prototype. Each method is explained with its usage and expected behavior.

## Table of Contents
1.  [Array.prototype.at()](#arrayprototypeat)
2.  [Array.prototype.concat()](#arrayprototypeconcat)
3.  [Array.prototype.copyWithin()](#arrayprototypecopywithin)
4.  [Array.prototype.entries()](#arrayprototypeentries)
5.  [Array.prototype.every()](#arrayprototypeevery)
6.  [Array.prototype.fill()](#arrayprototypefill)
7.  [Array.prototype.filter()](#arrayprototypefilter)
8.  [Array.prototype.find()](#arrayprototypefind)
9.  [Array.prototype.findIndex()](#arrayprototypefindindex)
10. [Array.prototype.findLast()](#arrayprototypefindlast)
11. [Array.prototype.findLastIndex()](#arrayprototypefindlastindex)
12. [Array.prototype.forEach()](#arrayprototypeforeach)
13. [Array.prototype.indexOf()](#arrayprototypeindexof)
14. [Array.prototype.join()](#arrayprototypejoin)
15. [Array.prototype.lastIndexOf()](#arrayprototypelastindexof)
16. [Array.prototype.map()](#arrayprototypemap)
17. [Array.prototype.pop()](#arrayprototypepop)
18. [Array.prototype.push()](#arrayprototypepush)
19. [Array.prototype.reduce()](#arrayprototypereduce)
20. [Array.prototype.shift()](#arrayprototypeshift)

## 1. Array.prototype.at()
The `at()` method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

## 2. Array.prototype.concat()
The `concat()` method of Array instances is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.

## 3.Array.prototype.copyWithin()
The `copyWithin()` method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

## 4.Array.prototype.entries()
The `entries()` method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

## 5.Array.prototype.every()
The `every()` method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

## 6. Array.prototype.fill()
The `fill()` method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

## 7. Array.prototype.filter()
The `filter()` method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function

## 8. Array.prototype.find()
The `find()` method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

## 9. Array.prototype.findIndex()
The `findIndex()` method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

## 10. Array.prototype.findLast()
The `findLast()` method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

## 11. Array.prototype.findLastIndex()
The `findLastIndex()` method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

## 12. Array.prototype.forEach()
The `forEach()` method of Array instances executes a provided function once for each array element.

## 13. Array.prototype.indexOf()
The `indexOf()` method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

## 14. Array.prototype.join()
The `join()` method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

## 15. Array.prototype.lastIndexOf()
The `lastIndexOf()` method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

## 16. Array.prototype.map()
The `map()` method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

## 17. Array.prototype.pop()
The `pop()` method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

## 18. Array.prototype.push()
The `push()` method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

## 19. Array.prototype.reduce()
The `reduce()` method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

## 20 Array.prototype.shift()
The `shift()` method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
