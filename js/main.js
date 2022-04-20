function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getMonthName(month){
    let name
    switch (month) {
        case 1:
            name = 'January'
            break;
        case 2:
            name ='February'
            break;
        case 3:
            name='March'
            break;
        case 4:
            name = 'April'
            break;
        case 5:
            name = 'May'
            break;
        case 6:
            name = 'June'
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = 'August'
            break;
        case 9:
            name = 'September'
            break;
        case 10:
            name = 'October'
            break;
        case 11:
            name = 'November'
            break;
        case 12:
            name = 'December'
            break;
    
        default:
            name = 'Not a month'
            break;
    }
    return name
}

function getFortune(fate){
    let message
    switch(fate){
        case 1:
            message ='be attacked'
            break;
        case 2:
            message ='win the lottery'
            break;
        case 3:
            message ='have good luck'
            break;
        case 4:
            message = 'meet someone famous'
            break;
        case 5:
            message = 'experience deja vu'
            break;
        default:
            message ='There was an error... no fortune for you'
            break;
    }
    return message
}

let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1,5)
let day =  getRandomIntInclusive(1,30)

const monthName = getMonthName(month)
const fateRevealed = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${day}, you will ${fateRevealed}`

document.querySelector('#fortune').innerText = fortuneRevealed