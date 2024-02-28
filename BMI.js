(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
})()

//number only validate

function numberonly(event) {

    var char=String.fromCharCode(event.which);
  

    if(!(/[0-9]/.test(char))){
        
        document.getElementById('ageinvalid').innerHTML=`<p style=color:red;>Please enter valid age </p>`
    }else{
        document.getElementById('ageinvalid').innerHTML="";
    }
    
}
function numberonlyh(event) {

    var char=String.fromCharCode(event.which);


    if(!(/[0-9]/.test(char))){
        
        document.getElementById('validhi').innerHTML=`<p style=color:red;>Please enter valid Height </p>`
    }else{
        document.getElementById('validhi').innerHTML="";
    }
    
}

function numberonlyw(event) {

    var char=String.fromCharCode(event.which);
    

    if(!(/[0-9]/.test(char))){
        
        document.getElementById('validw').innerHTML=`<p style=color:red;>Please enter valid Weight </p>`
    }else{
        document.getElementById('validw').innerHTML="";
    }
    
}


var age=document.getElementById('age');
var male=document.getElementById('male');
var female=document.getElementById('female');
var height=document.getElementById('height');
var weight=document.getElementById('weight');



function validateform() {
    if((age.value=="") || (male.value=="") ||(female.value=="") || (height.value=="") || (weight.value=="")){
     console.log("data")
    }else{
        count();
    }
    
}
document.getElementById('submit').addEventListener('click',validateform);

function count() {
    data=[age.value,height.value,weight.value];
    if(male.checked){
        data.push("male");
    }else if(female.checked){
        data.push("female");
    }
    console.log(data)
    

    var bmi=Number(data[2])/(Number(data[1])/100*Number(data[1])/100);
    

    if(bmi<18.5){

      document.getElementById('result').innerHTML=`<h4>${bmi}</h4>`
        
        document.getElementById('result').innerHTML=`<h4>${parseFloat(bmi).toFixed(2)}</h4>`
        sex.innerHTML=`<p>Sex:${data[3]}</p>`
        ages.innerHTML=`<p>Age${data[0]}</p>`
        heights.innerHTML=`<p>Height: ${data[1]}</p>`
        weights.innerHTML=`<p>Weight: ${data[2]}</p>`
        condition.innerHTML=`<p style=color:red;font-weight: bold >Condition: your are Underweight</p>`
    }else if(bmi>=18.5&&bmi<=24.9){
        console.log(`you are healthy person ${bmi}`);
        document.getElementById('result').innerHTML=`<h4>${parseFloat(bmi).toFixed(2)}</h4>`
        sex.innerHTML=`<p>Sex:${data[3]}</p>`
        ages.innerHTML=`<p>Age${data[0]}</p>`
        heights.innerHTML=`<p>Height: ${data[1]}</p>`
        weights.innerHTML=`<p>Weight: ${data[2]}</p>`
        condition.innerHTML=`<p style=color:green;font-weight:bold ;>Condition: your are Healthy</p>`
    }else if(bmi>=25&&bmi<=29.9){
        console.log(`you are over weight ${bmi}`);

        document.getElementById('result').innerHTML=`<h4>${parseFloat(bmi).toFixed(2)}</h4>`
        sex.innerHTML=`<p>Sex:${data[3]}</p>`
        ages.innerHTML=`<p>Age${data[0]}</p>`
        heights.innerHTML=`<p>Height: ${data[1]}</p>`
        weights.innerHTML=`<p>Weight: ${data[2]}</p>`
        condition.innerHTML=`<p style=color:#f5c105 ;font-weight:bold >Condition: your are Overweight</p>`

    }else if(bmi>=30&&bmi<=34.9){
        console.log(`you are obese ${bmi}`);
        document.getElementById('result').innerHTML=`<h4>${parseFloat(bmi).toFixed(2)}</h4>`
        sex.innerHTML=`<p>Sex:${data[3]}</p>`
        ages.innerHTML=`<p>Age${data[0]}</p>`
        heights.innerHTML=`<p>Height: ${data[1]}</p>`
        weights.innerHTML=`<p>Weight: ${data[2]}</p>`
        condition.innerHTML=`<p style=color:red;font-weight: bold;>Condition: your are Obese</p>`
    }else if(35<=bmi){
        console.log( `Extremely obese ${bmi}`);
        document.getElementById('result').innerHTML=`<h4>${parseFloat(bmi).toFixed(2)}</h4>`

        sex.innerHTML=`<p>Sex:${data[3]}</p>`
        ages.innerHTML=`<p>Age:${data[0]}</p>`
        heights.innerHTML=`<p>Height: ${data[1]}</p>`
        weights.innerHTML=`<p>Weight: ${data[2]}</p>`
        condition.innerHTML=`<p style=color:red;font-weight:bold;>Condition: your are Extreme Obese</p>`

         }
    
}

function checkmore() {
    window.location.reload()
}
