/*

"Two strings are anagrams of each other if by rearranging the characters in one string can result in the other one. In this problem, you are to detect whether two given strings are anagrams of each other."

*/

function isAnagram(str1, str2) {
  let sorted1 = str1
    .split("")
    .sort()
    .join("");
  let sorted2 = str2
    .split("")
    .sort()
    .join("");

  return sorted1 === sorted2;
}

module.exports = { isAnagram };
