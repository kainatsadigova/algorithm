let str = 'ANA'
console.log(str);
let strArray = str.split('').reverse().join('')
console.log(strArray)
if(strArray==str) {
    console.log('Polindrom ededdir')
}
else{
    console.log('Polindrom eded deyil')
} 



let name = 'Kainat dunyanin en varli adamlarindan biridir '
console.log(name)

if (name.length >10 && name.length <20) {
    console.log("TRUE")
} else {
    console.log("FALSE")
}
 


let number = [3,7,1,26,4,424,19,30];
console.log(number);

let numsay = number.length;


let cem = 0;
for (let i = 0; i < numsay; i++) {
    cem += number[i];
}
console.log("Ededlerin cemi:", cem);
console.log("Array's Length:",numsay);
let edediorta = cem / numsay;
console.log("Ededi Ortasi:",edediorta);