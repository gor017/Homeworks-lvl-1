/* xndir 1 (Given an array of numbers. Print frequency of each unique number. (Frequency is the
count of particular element divided by the count of all elements)) */
function frequency (arr) {
    arr.sort((a, b) => a - b)
    let o = {}
    let count = 1
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] === arr[i]) {
            count ++
        } else {
            newArr.push(count / arr.length)
            count = 1
        }
    }
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let isIncluded = false
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                isIncluded = true
                break
            }
        }
        if (isIncluded !== true) {
            res.push(arr[i])
        }
    } 
    for (let i = 0; i < res.length; i++) {
        o[res[i]] = newArr[i]
    }
    return o
}
frequency([1, 1, 2, 2, 3])


/* xndir 2 (Write a function that accepts a string(a sentence) as a parameter and finds the longest
word within the string․ If there are several words which are the longest ones, print the
last word(words can be separated by space, comma or hyphen).) */
function longestWord (str) {
    for (let j = 0; j < str.length; j++) {
        if (str[j] === ',') { //chem haskanum inchi storakety chi jnjum (kara || ov lini bolor nshannery(?,.``))
            str[j] = ''
        }
    }
    let result = ''
    let max = 0
    let strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > max) {
            max = strArr[i].length
            result = strArr[i]    
        }
    }
    return result
}

/* xndir 3 (Write a function to find longest substring in a given a string without repeating characters
except space character.
If there are several, return the last one. Consider that all letters are lowercase.) */
function longestStr (str) {
    str.toLowerCase()
    let strArr = []
    let countArr = []
    let newStr = ''
    let o = {}
    for (let i = 0; i < str.length; i++) {
        if (!newStr.includes(str[i]) || str[i] === ' ') {
            newStr += str[i]
        } else {
            strArr.push(newStr)
            newStr = []
            newStr += str[i]
        }
    }
    for (let j = 0; j < strArr.length; j++) {
        countArr.push(strArr[j].length)
    }
}
// heto klcnenq o objecti mej 1-in xndri nman u sort kanenq yst nvazman, bayc chem arel vorovhetev arden sxala cuyc talis

/* xndir 4 (Write a function to compute a new string from the given one by moving the first char to
come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.) */
function thirdEl (str) {
    let strArr = str.split('')
    let a = 0
    for (let i = 0; i < strArr.length;) {
        a = strArr[i]
        strArr.splice(i,1)
        strArr.splice(i + 2, 0, a)
        i += 3
    }
    str = strArr.join('')
    return str
}

