//Feature Set 1.1
function myMessage(){
    console.log('A function.');
}
//Feature Set 1.3
function add(num1,num2){
    var sum = num1 + num2;
    console.log(sum);
    return sum;
}
//Feature Set 2.1
function add2(num1,num2){
    var sum2 = num1 + num2;
    return sum2;
}
var add2result = add2(7,3);
//Feature Set 3.1
function cardFlip(element){
    $(element).hide();
}
//Function Inception
var result = add2(add2(30,50), add2(30,20));
