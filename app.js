function updateProductNumber(product,price,isIncreasing){
    const productInput=document.getElementById(product+'-number');
    let  productNumber=productInput.value;
    
    if(isIncreasing==true){
        productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0) {
        productNumber=parseInt(productNumber)-1;
    }
    productInput.value=productNumber;
    //update case total
    const productTotal=document.getElementById(product+'-total');
    productTotal.innerText=productNumber*price;
    calculateTotal();
}
function getInputValue(product){
    const productInput=document.getElementById(product+'-number');
    const productNumber=parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal=getInputValue('phone')*1219;
    const caseTotal=getInputValue('case')*59;
    const subTotal=phoneTotal+caseTotal;
    const tax=subTotal/10;
    const totalPrice=subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=totalPrice;
}

//handle phone increase decrease event
const phonePlus=document.getElementById('phone-plus');
phonePlus.addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
})
const phoneMinus=document.getElementById('phone-minus');
phoneMinus.addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
})

// handle phone case increase decrese event
const casePlus=document.getElementById('case-plus');
casePlus.addEventListener('click',function(){
    updateProductNumber('case',59,true);
})
const caseMinus=document.getElementById('case-minus');
caseMinus.addEventListener('click',function(){
    updateProductNumber('case',59,false);
})




























// function updatePhoneNumber(phoneIncreasing){
//     const phoneNumber=document.getElementById('phone-number');
//     const phoneNumberValue=phoneNumber.value;
//     if(phoneIncreasing==true){
//         phoneNumber.value=parseInt(phoneNumberValue)+1;
//     }
//     else if (phoneNumberValue>0) {
//         phoneNumber.value=parseInt(phoneNumberValue)-1;
//     }
// }

// const phonePlus=document.getElementById('phone-plus');
// phonePlus.addEventListener('click',function(){
//     updatePhoneNumber(true)
   
// })
// const phoneMinus=document.getElementById('phone-minus');
// phoneMinus.addEventListener('click',function(){
//     updatePhoneNumber(false);
   
// })