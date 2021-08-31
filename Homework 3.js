/* 1. Given an array. Write a recursive function that removes the
first element and returns the given array. (without using
arr.unshift(),assign second element to first, third element to
second...) */
function asd (arr, i = 0) {
    if (i === arr.length - 1) {
        arr.pop()
        return arr
    }
    arr[i] = arr[i + 1]
    asd(arr, i + 1)
    return arr
}
asd([6, 78, 'n', 0, 1])

/* 2. Given an array of nested arrays. Write a recursive function
that flattens it. (Hint create function that concats arrays). */
let arr1 = []
function asd (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr1.concat(arr[i])
            asd(arr[i])
        } else {
            arr1.push(arr[i])
        }
    }
    return arr1
}

/* 3. Given a number. Write a function that calculates its sum of
the digits and if that sum has more than 1 digit find the sum of
digits of that number. Repeat that process if needed and return
the result. */
function asd (num) {
    let a = String(num)
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += Number(a[i])
    }
    if (sum > 9) {
        return asd(sum)
    } else {
        return sum
    }
}

/* 4. Given an object. Invert it (keys become values and values
become keys). If there is more than key for that given value
create an array. */

let obj = {
    a: '1',
    b: '2',
    c: '2',
    d: '2'
}
function asd () {
    let newObj = {}
    for (let key in obj) {
        let value = obj[key]
        if (newObj[value] === undefined) {
            newObj[value] = key
        } else if (typeof newObj[value] === 'string' ) {
            newObj[value] = [newObj[value], key]
        } else {
            newObj[value].push(key)
        }
    }
    return newObj
}
