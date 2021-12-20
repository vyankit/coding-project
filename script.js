function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseFloat(principal)+parseFloat(interest);
    if (principal <= 0)
    {alert("please enter a positive number")}
    else{
    document.getElementById("result").innerHTML="If you deposit <span class="highlight">"+principal+"</span>,\<br\>at an interest rate of <span class="highlight">"+rate+"%</span>\<br\>You will receive an interest of <span class="highlight">"+interest+"</span>\<br\>and Your total amount will be <span class="highlight">"+amount+"</span>,\<br\>in the year <span class="highlight">"+year+"</span>\<br\>"}
}
        
