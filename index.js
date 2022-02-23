function saturdayFun(fun = 'roller-skate'){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair='*'){
    const part1 = 'You are ';
    return function(adj="special"){
        return (`${part1}${flair}${adj}${flair}!`)
    }
}



// const part1 = 'You are ';
//     return function(a = '*', b= 'special'){
//         return (`${part1} ${a} ${b} ${a}!`)
//     }