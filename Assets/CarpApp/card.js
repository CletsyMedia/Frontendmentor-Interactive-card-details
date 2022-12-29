let nameError = document.getElementById("nameErr");
let numError = document.getElementById("numErr");
let monthError = document.getElementById("monthErr");
let cvcError = document.getElementById("cvcErr");





// Number
const cardNum = document.getElementById("card-num").oninput =()=>{
    document.getElementById("num").innerText = document.getElementById("card-num").value
}
// Validating Number
validateNum=()=>{
    let colorBorder = document.getElementById("card-num");
    let personNum = document.getElementById("card-num").value;
    if(personNum.length == 0){
        colorBorder.style.borderColor="red";
        numError.innerHTML = "Card number is required!";
        return false;
    }
    if(personNum.length !== 16 ){
        numError.innerHTML = "16 digits required!";
        colorBorder.style.borderColor="red";
        return false;
    }
    if(!personNum.match(/^[0-9]{16}$/)){
        numError.innerText ="Wrong format, number only!";
        return false;
    }
    
    numError.innerHTML = "<i class='fal fa-check-circle'></i>";
    colorBorder.style.borderColor="hsl(249, 99%, 64%)";
    return true;
}

// Name
const cardName = document.getElementById("card-name").oninput =()=>{
    document.getElementById("name").innerText = document.getElementById("card-name").value;
}
// Validating name
validateName=()=>{
    let colorBorder = document.getElementById("card-name");
    let personName = document.getElementById("card-name").value;
    if(personName.length == 0){
        nameError.innerText = "Name is required!";
        colorBorder.style.borderColor="red";
        return false;
    }
    if(!personName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerText = "Write full name, letters only!";
        colorBorder.style.borderColor="red";
        return false;
    }
    nameError.innerHTML = "<i class='fal fa-check-circle'></i>";
    colorBorder.style.borderColor="hsl(249, 99%, 64%)";
    return true;
}
// Date-month
const cardMonth = document.getElementById("card-month").oninput =()=>{
    document.getElementById("month").innerText = document.getElementById("card-month").value
}
// Validating Month
validateInfoMonth=()=>{
    let borderColor = document.getElementById("card-month");
    let monthInfo = document.getElementById("card-month").value;
    if(monthInfo.length == 0){
        monthError.innerText = "Can't be blank";
        borderColor.style.borderColor = "red";
        return false;
    }
    if(monthInfo.length !== 2){
        monthError.innerText="Two digits"
        borderColor.style.borderColor = "red";
        return false;
    }
    monthError.innerHTML = "<i class='fal fa-check-circle'></i>";
    borderColor.style.borderColor="hsl(249, 99%, 64%)";
    return true;
}

// Date-year
const cardYear = document.getElementById("card-year").oninput =()=>{
    document.getElementById("year").innerText = document.getElementById("card-year").value
}
// Year validation
validateInfoYear=()=>{
    let borderColor = document.getElementById("card-year");
    let yearInfo = document.getElementById("card-year").value;
    if(yearInfo.length == 0){
        monthError.innerText = "Can't be blank";
        borderColor.style.borderColor = "red";
        return false;
    }
    if(yearInfo.length !== 2){
        monthError.innerText="Two digits"
        borderColor.style.borderColor = "red";
        return false;
    }
    monthError.innerHTML = "<i class='fal fa-check-circle'></i>";
    borderColor.style.borderColor="hsl(249, 99%, 64%)";
    return true;
}

// CVC
const cvcInfo = document.getElementById("card-cvc").oninput=()=>{
    document.getElementById("cvc").innerText = document.getElementById("card-cvc").value;
}
// cvc validaton
validateCvc=()=>{
    let borderColor = document.getElementById("card-cvc");
    let cvcInfo = document.getElementById("card-cvc").value;
    if(cvcInfo.length == 0){
        cvcError.innerText = "Can't be blank";
        borderColor.style.borderColor = "red";
        return false;
    }
    if(cvcInfo.length !== 3){
        cvcError.innerText = "Three digits required!";
        borderColor.style.borderColor = "red";
        return false;
    }
    cvcError.innerHTML = "<i class='fal fa-check-circle'></i>";
    borderColor.style.borderColor="hsl(249, 99%, 64%)";
    return true;
}

// Validate button
let thankyou = document.getElementById("thank");

function validateDetails(){
    if(!validateNum() && !validateName() && !validateInfoMonth() && !validateInfoYear() && !validateCvc()){
        thankyou.style.top="-120%";

    }else{
        thankyou.style.top="0";
    }
}
