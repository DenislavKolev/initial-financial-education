$(document).ready(function () {

    $('form').submit(calculate);
    function calculate(ev) {
        ev.preventDefault();
        $('article').css('display', 'block');

        //get inputs values
        var duration = parseInt($('#duration').val());
        var monthlyPercentage = parseFloat($('#interesteRate').val()) / 12;
        var coefficient = duration / parseInt($('#accrualPeriod').val());
        var number = duration / coefficient;
        var total = parseFloat($('#deposit').val()) ;

        //main calculations
        if(duration < parseInt($('#period').val())){
            alert("Периода на олихвяване не може да бъде по-голям от срока на депозита.")
        }

        for(var i =1 ; i<=coefficient; i++ ){
            total = total + ((monthlyPercentage / 100) * total * number);
        }

        var accruedInterest = total - $('#deposit').val();

           //rounding the numbers up to 2 decimal places
        accruedInterest = Math.round(accruedInterest*100)/100;
        total = Math.round(total*100)/100;

        if((accruedInterest *100) % 100 == 0) accruedInterest = accruedInterest + ".00";
        else  if((accruedInterest *10) %1 ==0  ) accruedInterest = accruedInterest + "0";

        if(( total *100) % 100 == 0)  total =  total + ".00";
        else  if(( total *10) %1 ==0  )  total =  total + "0";

        //fill inputs with calculated data
        $('#accruedInterest').html(accruedInterest + ' лв');
        $('#total').html(total + ' лв');
    }
});