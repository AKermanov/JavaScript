function magicMatrices(input) {
let isMagical = true;
let value = input[0].reduce((a,b) => a+b, 0);
for(let i = 0;i<input.length;i++){
    let row = input[i].reduce((a,b)=> a + b, 0)
    let sum = 0;
    for(let j = 0; j < input.length; j++){
        sum+= input[i][j];
    }
    if (row !== value || sum !== value){
        isMagical = false;
        break;        
}
}
isMagical? console.log(true):console.log(false);
}
