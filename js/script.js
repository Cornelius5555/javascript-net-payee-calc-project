const form = document.getElementById("myForm")
form.addEventListener('submit', function (e) {
    e.preventDefault()

    let basic_salary = (document.getElementById('basic_salary').value)
    let benefits = (document.getElementById('benefits').value)

    if (basic_salary.length > 0 && benefits.length > 0) {



        function calc_grosssalary(basic_salary, benefits) {
           let  gross_salary = Number(basic_salary) + Number(benefits);
            return gross_salary;
        }
        let gross_salary = calc_grosssalary(basic_salary, benefits);
        document.getElementById("gross_salary").innerHTML = gross_salary
    

        function calc_nhif(gross_salary) {
            let NHIF = ""
            if (gross_salary < 6000) {
                NHIF = 150;
            }
            else if (gross_salary >= 6000 && gross_salary <= 7999) {
                NHIF = 300;
            }
            else if (gross_salary >= 8000 && gross_salary <= 11999) {
                NHIF = 400;
            }
            else if (gross_salary >= 12000 && gross_salary <= 14999) {
                NHIF = 500;
            }
            else if (gross_salary >= 15000 && gross_salary <= 19999) {
                NHIF = 600;
            }
            else if (gross_salary >= 20000 && gross_salary <= 24999) {
                NHIF = 750;
            }
            else if (gross_salary >= 25000 && gross_salary <= 29999) {
                NHIF = 850;
            }
            else if (gross_salary >= 30000 && gross_salary <= 34999) {
                NHIF = 900;
            }
            else if (gross_salary >= 35000 && gross_salary <= 39999) {
                NHIF = 950;
            }
            else if (gross_salary >= 40000 && gross_salary <= 44999) {
                NHIF = 1000;
            }
            else if (gross_salary >= 45000 && gross_salary <= 49999) {
                NHIF = 1100;
            }
            else if (gross_salary >= 50000 && gross_salary <= 59999) {
                NHIF = 1200;
            }
            else if (gross_salary >= 60000 && gross_salary <= 69999) {
                NHIF = 1300;
            }
            else if (gross_salary >= 70000 && gross_salary <= 79999) {
                NHIF = 1400;
            }
            else if (gross_salary >= 80000 && gross_salary <= 89999) {
                NHIF = 1500;
            }
            else if (gross_salary >= 90000 && gross_salary <= 99999) {
                NHIF = 1600;
            }
            else {
                NHIF = 1700;
            }
            return NHIF;
        }
        let NHIF = calc_nhif(gross_salary)
        document.getElementById("nhif").innerHTML = NHIF

        function calc_nssf(gross_salary) {
            let NSSF = ""
            if (gross_salary > 0 && gross_salary <= 18000) {
                NSSF = gross_salary * 0.06;
            }
            else {
                NSSF = 18000 * 0.06;
            }
            return NSSF
        }
        let NSSF = calc_nssf(gross_salary)
        document.getElementById("NSSF").innerHTML = NSSF

        function calc_nhdf(gross_salary) {
            let NHDF = ""
            NHDF = gross_salary * 0.015;
            return NHDF
        }
        let NHDF = calc_nhdf(gross_salary);
        document.getElementById("NHDF").innerHTML = NHDF

        function calc_taxableIncome(gross_salary, NSSF, NHDF) {
            let taxable = ""
            taxable = gross_salary - (NSSF + NHDF);
            return taxable;
        }
        let taxable_income = calc_taxableIncome(gross_salary, NSSF, NHDF);

        function calc_payee(taxable_income) {
            let PAYEE = "";
            if (taxable_income <= 24000) {
                PAYEE = 2400;
            }

            else if (taxable_income >= 24000 && taxable_income <= 32333) {
                PAYEE = ((taxable_income - 24000) * 0.25) + (24000 * 0.1) - 2400;
            }
            else if (taxable_income >= 32333 && taxable_income <= 500000) {
                PAYEE = ((taxable_income - 32333) * 0.3) + (24000 * 0.1) + (8333 * 0.25) - 2400;
            }
            else if (taxable_income >= 500000 && taxable_income <= 800000) {
                PAYEE = ((taxable_income - 500000) * 0.325) + (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) - 2400;
            }
            else {
                taxable_income > 800000
                PAYEE = ((taxable_income - 800000) * 0.35) + (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) - 2400;
            }
            return PAYEE;
        }
        let PAYEE = calc_payee(taxable_income);
        document.getElementById("payee").innerHTML = PAYEE

        function calc_netSalary(gross_salary, NHDF, NHIF, NSSF, PAYEE) {
            let salary = ""
            salary = gross_salary - (NHIF + NSSF + NHDF + PAYEE);
            return salary;
        }
        let net_salary = calc_netSalary(gross_salary, NHDF, NHIF, NSSF, PAYEE);
        document.getElementById("net_pay").innerHTML = net_salary


    }
    else {
        alert("Insert values")
    }

})