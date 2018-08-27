$(document).ready(function () {

    $('form').submit(calculate);
    function calculate(ev) {
        ev.preventDefault();
        $('article').css('display', 'block');

        //get inputs values
        var credit = parseFloat($('#credit').val()) ;
        var duration = parseInt($('#duration').val()) ;
        var interestRate = parseFloat($('#interestRate').val()) ;
        var initaialFees = parseFloat($('#initialFees').val());
        var moreInitalFees = parseFloat($('#moreInitialFees').val()) ;
        var annualFees = parseFloat($('#annualFees').val()) ;
        var moreAnnualFees = parseFloat($('#moreAnnualFees').val()) ;
        var monthlyFees = 0;
        var sum = credit;

        //main calculations
        if(credit !=0 && duration !=0 && interestRate !=0){

            if (annualFees !=0 && moreAnnualFees !=0){
                monthlyFees = annualFees / 100;
            }
            if (annualFees == 0 && moreAnnualFees !=0){
                monthlyFees = moreAnnualFees / 100;
            }
            if (annualFees !=0 && moreAnnualFees !=0){
                monthlyFees = annualFees + moreAnnualFees;
            }
            var monthlyInterestRate = interestRate / 12 / 100;
            var coefficient1 = 1 + monthlyInterestRate;
            var coefficient2 = Math.pow(coefficient1, duration);
            var coefficient3 = 1 - (1/coefficient2);
            var coefficient4 = coefficient3 / monthlyInterestRate;
            var monthlyPayment = credit / coefficient4;
            var totalInterestRate = 0;
            var annualFee = 13;
            var principal = 0;
            var sumMonthlyFees = 0;
            for (var i = 1; i <=duration; i++){
                var sumInterestRate = credit * monthlyInterestRate;
                totalInterestRate +=  sumInterestRate;
                principal = monthlyPayment - sumInterestRate;

                if (monthlyFees != 0 && i == annualFee ){
                    sumMonthlyFees = credit * monthlyFees;
                    annualFee +=12;
                }
                credit = credit - principal;
            }
            console.log(sum)



            var totalInitialFees = initaialFees + moreInitalFees;
            var totalReturn = sum + totalInterestRate + totalInitialFees;

            //rounding the numbers up to 2 decimal places
            sum = Math.round(sum*100)/100;
            monthlyPayment = Math.round(monthlyPayment*100)/100;
            totalInitialFees = Math.round(totalInitialFees*100)/100;
            totalInterestRate = Math.round(totalInterestRate*100)/100;
            totalReturn = Math.round(totalReturn*100)/100;

            if((sum *100) % 100 == 0) sum = sum + ".00";
            else  if((sum *10) %1 ==0  ) sum = sum + "0";

            if((monthlyPayment *100) % 100 == 0) monthlyPayment = monthlyPayment + ".00";
            else  if((monthlyPayment *10) %1 ==0  ) monthlyPayment = monthlyPayment + "0";

            if((totalInitialFees *100) % 100 == 0) totalInitialFees = totalInitialFees + ".00";
            else  if((totalInitialFees *10) %1 ==0  ) totalInitialFees = totalInitialFees + "0";

            if((totalInterestRate *100) % 100 == 0) totalInterestRate = totalInterestRate + ".00";
            else  if((totalInterestRate *10) %1 ==0  ) totalInterestRate = totalInterestRate + "0";

            if((totalReturn *100) % 100 == 0) totalReturn = totalReturn + ".00";
            else  if((totalReturn *10) %1 ==0  ) totalReturn = totalReturn + "0";

            //fill inputs with calculated data
            $('#creditSpan').html(sum + ' лв');
            $('#durationSpan').html(duration);
            $('#monthlyPayment').html(monthlyPayment + ' лв');
            $('#totalInitalFees').html(totalInitialFees + ' лв');
            $('#totalInterestRate').html(totalInterestRate + ' лв');
            $('#totalReturn').html(totalReturn + ' лв');

        }
    }
});