// caseupdare function

function caseupdate(isIncrease){
    const caseNumberField=document.getElementById('case-number');
    const caseNumberString=caseNumberField.value;
    const oldCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if( isIncrease== true){
        newCaseNumber=oldCaseNumber+1;
    }
    else{
        newCaseNumber=oldCaseNumber-1;
    }
    caseNumberField.value=newCaseNumber;

    return newCaseNumber;
};
// totalPrise function
function caseTotalPrise(totalCaseNumber){
    let totalCasePrise =totalCaseNumber*59;
    const casePrisefield =document.getElementById('case-prise-total');
    casePrisefield.innerText=totalCasePrise;

};
document.getElementById('btn-case-plus').addEventListener('click',function(){
   const totalCaseNumber=caseupdate(true);
   caseTotalPrise(totalCaseNumber);
   calculateSubtotal();
   

    
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const totalCaseNumber=caseupdate(false);
    caseTotalPrise(totalCaseNumber); 
    calculateSubtotal();
    
    
})