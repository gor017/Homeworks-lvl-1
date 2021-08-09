/* 1. Write a function which receives an array and a number as arguments and returns a new array 
from the elements of the given array which are larger than the given number. */

function asd (arr, num) {
    let newArr = arr.filter(a => a > num)
    if (newArr.length === 0) {
        console.log('Such values do not exist.')
    } else {
        return newArr
    }
}

/* 2. Write a function, which receives two numbers as arguments and finds all numbers between 
them such that each digit of the number is even. The numbers obtained should be printed in a 
comma-separated sequence on a single line. */

function getEvens (num1, num2) {
    let arr = []
    for (let i = num1; i <= num2; i++) {
        let isEven = true
        if (i % 2 === 0) {
            res = i
            while (res > 0) {
            let temp
            temp = res % 10
            res = (res - temp) / 10
            if (temp % 2 !== 0) {
                isEven = false
                }
            }
            if (isEven) {
                arr.push(i)
            }
        }
    }
    if (arr.length === 0) {
        return 'Such numbers does not exist.'
    }
    return arr.join(', ')
}

// 3. Write a recursive function to determine whether all digits of the number are odd or not.
function asd (num) {
    if (num > 0) {
        let temp = num % 10
        if (temp % 2 !== 1) {
            return false
        }
    }
    return true
    asd((num - temp) / 10)
}

/* 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such 
element does not exist, return -1)․ */

function asd (arr, min = -1) {
    if (arr.length === 0) {
        return min
    }
    if (arr[0] >= 0 && (arr[0] <= min || min < 0)) {
        min = arr[0]
    }
    arr.shift()
    return asd (arr, min)
}

// 5. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.
function find (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) {
            return arr.indexOf(arr[i + 1])  
        }
    }
    return -1
}


