/*
    https://www.codewars.com/kata/vowel-count

    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, and u as vowels for this Kata.
    The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').reduce((p, c) => vowels.indexOf(c) >= 0 ? p + 1 : p, 0);
}

console.log(getCount("abracadabra"), 5);