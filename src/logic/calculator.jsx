export default class Calculator {
    constructor() {
        this.rate = 0.05;
    }

    /*http://www.thecalculatorsite.com/finance/calculators/loancalculator.php
    The loan calculator uses the following formula to calculate loan figures:
    Monthly payment = [ r + r / ( (1+r) ^ months -1) ] x principal loan amount
    */
    calculateInstallment(amount, months) {
        if (!amount || !months)
            return 0;

        const r = this.rate / 12;
        const sum = r + (r / (Math.pow((1 + r), months) - 1));
        return Math.round(sum * amount * 100) / 100;
    }
}
