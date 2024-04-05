
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

 */

var isAnagram = function(s, t) {
    if(s == null || t == null) return false;
    if(s == "" || t == "") return false;

    if(s.length !== t.length) return false;

    s = s.toLower().split("").sort();
    t = t.toLower().split("").sort();
    
    for(var i = 0 ; i < s.length; i++)
    {
        if(s[i] != t[i]) return false;
    }

    return true;
};