// 1- average of 10 numbers
let sum=0;
function avg(arr){
for (var i=0; i<arr.length; i++){
    sum+=arr[i];
}
   const average=sum / arr.length;
   console.log(average);
}
const arr =[2,4,6,8,10,12,14,16,18,20];
avg(arr);

//_____________________

// 2- area of triangle

function area(base,height){
      var area = (base*height)/2; // base*height*0.5
         return area ;
}
     console.log(area(10,20));

//______________________

// 3- take age in years return age in day

function age(years){
        var age = years*365; 
        return age ;
    }
    console.log(age(1));

//______________________

// 4- sum of two numbers

function sum0(num1,num2){
        return num1+num2;
    }
    console.log(sum0(10,30));

//______________________

//5- return the first element of array with condition more than 10 elements

function firstElement (arr0){
    if(arr0.length>10){
        return arr0[0];
    }else {
        console.log("Enter more than 10 elements")
        return 0;
    }
}
const arr0 =["yousef","badr","mohamed","elsayed","ibrahim","mohmoud","yousef","badr","mohamed","elsayed","ibrahim","mohmoud"];
console.log(firstElement(arr0));

//_____________________

//6- show your name 

function write (){
    return "messi";
}
console.log(write());

//_____________________

//7- convert hours to seconds 

function convert(hours){
    return hours * 60 *60;
}
console.log(convert(1));

//_____________________

//8- given 4 num ,return true if the sum >350 ,otherwise return false show in html document

function sum1(num1,num2,num3,num4){
   var x= num1+num2+num3,num4;
   if(x>350){
    return true;
   }else{
    return false
   }
}
document.write(sum1(10,30,50,70));

//____________________

//9- if num=0 return true else return false

function test(n){
    if(n==0){
        return true;
    }else{return false;}
}
console.log(test(0));

//___________________

//10- modulus 

function mod(n1,n2){
    var m=n1%n2;
    return m;
}
console.log(mod(5,2));

//___________________

//11- comparison 

function comparison(a,b){
    if(a>b){
        console.log("a is the biggest")
    }else if (b>a){
        console.log("b is the biggest")
    }else {
        console.log("they are equal")
    }
}
comparison(10,20);

//___________________

//12- check is a number or not

function check(s){
    if(isNaN(s)){ console.log("Not a number");}
    else{console.log( " it a number ");}
}
check("a");

//__________________

//13- the current date 
// ***** من chatgpt
function getCurrentDate() {
    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();

    // Format the date as YYYY-MM-DD
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    return formattedDate;
}

// Example usage:
const currentDate = getCurrentDate();
console.log("Current Date:", currentDate);

    