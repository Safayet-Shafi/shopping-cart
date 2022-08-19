function phoneNumberUpdate(isIncrease){
    const phoneField=document.getElementById('phn-field');
    const phoneFieldString=phoneField.value;
    const oldPhoneNumber =parseInt(phoneFieldString);
    let newPhoneNumber;
    if(isIncrease == true){
        newPhoneNumber = oldPhoneNumber+1;
    }
    else{
        newPhoneNumber = oldPhoneNumber-1;
    }

    phoneField.value=newPhoneNumber;
    return newPhoneNumber;
}

function phoneTotalPrise(totalPhoneNumber){
    const totalPhonePrise = totalPhoneNumber*1219;
    const phonePriseField =document.getElementById('phn-total-prise');
    phonePriseField.innerText=totalPhonePrise;
}


document.getElementById('btn-phn-plus').addEventListener('click',function(){
    const totalPhoneNumber = phoneNumberUpdate(true);
    phoneTotalPrise(totalPhoneNumber);
    calculateSubtotal();
    
    
    


    
})
document.getElementById('btn-phn-minus').addEventListener('click',function(){
    const totalPhoneNumber = phoneNumberUpdate(false);
    phoneTotalPrise(totalPhoneNumber);

    calculateSubtotal();
})