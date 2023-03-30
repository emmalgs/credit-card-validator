function validate(credit) {
    const creditArray = credit.toString().split("");
    const doubledCreditArray = []
    if (creditArray.length === 16) {
        for (let i = 0; i < creditArray.length; i++) {
            if (i % 2 !== 0) {
                let sumDouble = creditArray[i] * 2
                if (sumDouble > 9) {
                    const summedDouble = sumDouble.toString().split("");
                    let sum = 0;
                    summedDouble.forEach(function(number) {
                        sum += parseInt(number)
                    })
                    doubledCreditArray.push(sum)
                } else { doubledCreditArray.push(sumDouble) }
            } else { doubledCreditArray.push(parseInt(creditArray[i]))}
            }
        } else { return false; }
        let sum = 0;
        doubledCreditArray.forEach(function(number) {
            sum+= parseInt(number);
        })
        const sumArray = sum.toString().split("");
        if (parseInt(sumArray[sumArray.length - 1]) === 0) {
            return true;
        } else { return false; }
}

function identify(credit) {
    let cardCompany = credit.toString().split("");
    if (cardCompany[0] === "4") {
    return "VISA";
    } else if (cardCompany[0] === "5") {
        return "MC";
    } else if (cardCompany[0] === "6") {
        return "DISC";
    } else {
        return "INVALID";
    }
}