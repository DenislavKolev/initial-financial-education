$(document).ready(function () {

    $('form').submit(calculate)

    function calculate(ev){
        ev.preventDefault();
        $('article').css('display', 'block');
        //ger inputs values
        var salary = parseFloat($('#salary').val()) ;
        var minSocialSecurityIncome =parseFloat($('#minSocialSecurityIncome').val()) ;
        var year = parseInt($('#salary').val());
        var experience = parseInt($('#experience').val()) ;
        var moneyForExeperience = parseFloat($('#moneyForExeperience').val()) ;
        var moreIncome = parseFloat($('#moreIncome').val());
        var moneyForExeperience = experience * salary * moneyForExeperience /100;
        var grossSalary  = salary + moneyForExeperience + moreIncome;
        var socialSecurityIncome = salary + moneyForExeperience + moreIncome;
        var socialSecurityTax;
        var extraHealthInsuranceTax;

        //main calculations
        if(socialSecurityIncome > 2600) socialSecurityIncome = 2600;
        if(socialSecurityIncome <= minSocialSecurityIncome) socialSecurityIncome = minSocialSecurityIncome;
        if(year == 1){
            socialSecurityTax = socialSecurityIncome * 10.14 / 100;
            extraHealthInsuranceTax = 0;
        }else{
            socialSecurityTax = socialSecurityIncome * 7.94 / 100;
            extraHealthInsuranceTax = socialSecurityIncome * 2.2 / 100;
        }
        var healthInsuranceTax = socialSecurityIncome * 3.2 / 100;
        var totalTax = socialSecurityTax + extraHealthInsuranceTax + healthInsuranceTax;
        var taxBase = grossSalary - totalTax;
        var incomeTaxOfIndividuals = taxBase * 0.1;
        var totalDeductions = totalTax + incomeTaxOfIndividuals;
        var netSalary = salary  + moneyForExeperience + moreIncome - totalDeductions;

            //rounding the numbers up to 2 decimal places
        salary = Math.round(salary * 100 ) / 100;
        minSocialSecurityIncome = Math.round(minSocialSecurityIncome * 100 ) / 100;
        grossSalary = Math.round(grossSalary * 100 ) / 100;
        moneyForExeperience = Math.round(moneyForExeperience * 100 ) / 100;
        socialSecurityIncome = Math.round(socialSecurityIncome * 100 ) / 100;
        socialSecurityTax = Math.round(socialSecurityTax * 100 ) / 100;
        extraHealthInsuranceTax = Math.round(extraHealthInsuranceTax * 100 ) / 100;
        healthInsuranceTax = Math.round(healthInsuranceTax * 100 ) / 100;
        totalTax = Math.round(totalTax * 100 ) / 100;
        taxBase = Math.round(taxBase * 100 ) / 100;
        incomeTaxOfIndividuals = Math.round(incomeTaxOfIndividuals * 100 ) / 100;
        totalDeductions = Math.round(totalDeductions * 100 ) / 100;
        netSalary = Math.round(netSalary * 100 ) / 100;

        if((salary *100) % 100 == 0) salary = salary + ".00";
        else  if((salary *10) %1 ==0  ) salary = salary + "0";

        if((minSocialSecurityIncome *100) % 100 == 0) minSocialSecurityIncome = minSocialSecurityIncome + ".00";
        else  if((minSocialSecurityIncome *10) %1 ==0  ) minSocialSecurityIncome = minSocialSecurityIncome + "0";

        if((grossSalary *100) % 100 == 0) grossSalary = grossSalary + ".00";
        else  if((grossSalary *10) %1 ==0  ) grossSalary = grossSalary + "0";

        if((moneyForExeperience *100) % 100 == 0) moneyForExeperience = moneyForExeperience + ".00";
        else  if((moneyForExeperience *10) %1 ==0  ) moneyForExeperience = moneyForExeperience + "0";

        if((socialSecurityIncome *100) % 100 == 0) socialSecurityIncome = socialSecurityIncome + ".00";
        else  if((socialSecurityIncome *10) %1 ==0  ) socialSecurityIncome = socialSecurityIncome + "0";

        if((socialSecurityIncome *100) % 100 == 0) socialSecurityIncome = socialSecurityIncome + ".00";
        else  if((socialSecurityIncome *10) %1 ==0  ) socialSecurityIncome = socialSecurityIncome + "0";

        if((extraHealthInsuranceTax *100) % 100 == 0) extraHealthInsuranceTax = extraHealthInsuranceTax + ".00";
        else  if((extraHealthInsuranceTax *10) %1 ==0  ) extraHealthInsuranceTax = extraHealthInsuranceTax + "0";

        if((healthInsuranceTax *100) % 100 == 0) healthInsuranceTax = healthInsuranceTax + ".00";
        else  if((healthInsuranceTax *10) %1 ==0  ) healthInsuranceTax = healthInsuranceTax + "0";

        if((totalTax *100) % 100 == 0) totalTax = totalTax + ".00";
        else  if((totalTax *10) %1 ==0  ) totalTax = totalTax + "0";

        if((taxBase *100) % 100 == 0) taxBase = taxBase + ".00";
        else  if((taxBase *10) %1 ==0  ) taxBase = taxBase + "0";

        if((incomeTaxOfIndividuals *100) % 100 == 0) incomeTaxOfIndividuals = incomeTaxOfIndividuals + ".00";
        else  if((incomeTaxOfIndividuals *10) %1 ==0  ) incomeTaxOfIndividuals = incomeTaxOfIndividuals + "0";

        if((totalDeductions *100) % 100 == 0) totalDeductions = totalDeductions + ".00";
        else  if((totalDeductions *10) %1 ==0  ) totalDeductions = totalDeductions + "0";

        if((netSalary *100) % 100 == 0) netSalary = netSalary + ".00";
        else  if((netSalary *10) %1 ==0  ) netSalary = netSalary + "0";

        //fill inputs with calculated data
        $('#salarySpan').html(salary + ' лв');
        $('#minSocialSecurityIncomeSpan').html(minSocialSecurityIncome + ' лв');
        $('#moneyForExeperienceSpan').html(moneyForExeperience + ' лв');
        $('#moreIncomeSpan').html(moreIncome + ' лв');
        $('#grossSalary').html(grossSalary + ' лв');
        $('#socialSecurityIncome').html(socialSecurityIncome + ' лв');
        $('#socialSecurityTax').html(socialSecurityTax + ' лв');
        $('#extraHealthInsuranceTax').html(extraHealthInsuranceTax + ' лв');
        $('#healthInsuranceTax').html(healthInsuranceTax + ' лв');
        $('#totalTax').html(totalTax + ' лв');
        $('#taxBase').html(taxBase + ' лв');
        $('#incomeTaxOfIndividuals').html(incomeTaxOfIndividuals + ' лв');
        $('#totalDeductions').html(totalDeductions + ' лв');
        $('#netSalary').html(netSalary + ' лв');
    }
});