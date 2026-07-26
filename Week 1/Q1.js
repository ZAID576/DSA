// #1 function code problem

function voting(age) {
    if (age < 0) {
        console.log("Invalid input")
    }

    else if (age < 18) {
        console.log("Not eligible to vote")
    }

    else {
        console.log("Eligible to vote")
    }
}

voting (55)