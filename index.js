function calculateTax(amount){
    let tax = amount * .1;
    return tax;
}
function convertToUpperCase(text){
    return text.toUpperCase();
}
function findMaximum(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
function isPalindrome(word){
     let palindrome = word.split("").reverse().join("");

     return word === palindrome;
}
function calculateDiscountedPrice(originalPrice, discountPercentage){
    let discount = originalPrice * discountPercentage/100
    let newPrice = originalPrice - discount
    return newPrice 
}
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };