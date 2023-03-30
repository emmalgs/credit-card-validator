function validate(credit) {
    const creditArray = credit.toString().split("");
    if (creditArray.length === 16) {
        const doubledCreditArray = []
        for (let i = 0; i < creditArray.length; i++) {
            if (i % 2 !== 0) {
                doubledCreditArray.push(creditArray[i] * 2)
            } else { doubledCreditArray.push(parseInt(creditArray[i]))}
        }
        return doubledCreditArray
        let sum = 0;
        creditArray.forEach(function(number) {
            sum+= parseInt(number);
        })
        const sumArray = sum.toString().split("");
        if (parseInt(sumArray[sumArray.length - 1]) === 0) {
            return true;
        } else { return false; }
    } else { return false }
}