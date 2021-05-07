function sum(arr,indexOne,indexTwo) {
    if(!Array.isArray(arr)) { return NaN; }
    indexOne <0 ? indexOne = 0 :null;
    indexTwo > arr.length ? indexTwo = arr.length-1 : null;
    return arr.slice(indexOne,indexTwo+1).map(Number).reduce((a,b)=> a+b,0);
}
