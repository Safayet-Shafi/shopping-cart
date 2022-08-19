function getTextElementValueById(elementid){
    const elementField=document.getElementById(elementid);
    const elementFieldString =elementField.innerText;
    const elementFieldValue = parseInt(elementFieldString);

    return elementFieldValue;
};

function setElementValueById(elementid,number){
    const elementField =document.getElementById(elementid);
    elementField.innerText=number;
}


function calculateSubtotal(){
    const phoneFinalPrise = getTextElementValueById('phn-total-prise');
    const caseFinalPrise = getTextElementValueById('case-prise-total');

    const allPriseTotal =phoneFinalPrise+caseFinalPrise;
    
   setElementValueById('sub-total',allPriseTotal);

    // calculate tax

    const taxAmountString = (allPriseTotal*.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString);
    setElementValueById('tax-amount',taxAmount);

    const totalAmount=allPriseTotal+taxAmount;
    setElementValueById('total-amount',totalAmount);
};