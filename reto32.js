function isAnagram(str, str1) {
  if (!str || !str1) return false;

  const formatString = (str) =>
   str
  .toLowerCase()
  .replace(/[^a-z0-9]/g, '')
  .split('')
  .sort()
  .join('');

  return formatString(str) === formatString(str1);
}

console.log(isAnagram("roma", "amor")); // true
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("Ana", "naa")); // true
console.log(isAnagram("React", "Trace")); // true
console.log(isAnagram("JavaScript", "Python")); // false
