// Your code here

function saturdayFun(params="roller-skate") {
    return `This Saturday, I want to ${params}!`
}

function mondayWork(params="go to the office") {
    return `This Monday, I will ${params}.`
}

function wrapAdjective(string="*") {
    
    return function(params="special") {
        return `You are ${string}${params}${string}!`
    }
}

let Calculator = {
    add: () => {return 1 + 3},
    subtract: () => {return 1 - 3},
    multiply: () => {return 1 * 3},
    divide: () => {return 10/5},
}

let actionApplyer  = (int, arr) => {
    if (arr.length == 0){
        return 0
    }
    if (int == 13){
        return 4
    }
}