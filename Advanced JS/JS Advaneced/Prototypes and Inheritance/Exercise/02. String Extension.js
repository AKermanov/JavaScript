(function solve() {
String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
        return this.toString();
    } else {
        return `${str}${this}`;
    }
};
String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
        return this.toString();
    } else {
        return `${this}${str}`;
    }
};
String.prototype.isEmpty = function () {
    if (this.length === 0) {
        return true;
    } else {
        return false;
    }
};
String.prototype.truncate = function (n) {
    if (this.length <= n) {
        return this.toString();
    }
    let output;
    if(this.length > n){
        
        if(n<4){
            return `${'.'.repeat(n)}`;
        }
        output = this.toString().slice(0,n).trim();
        //  let regexSpace = /\ $/;
         let indxOfSpace = output.lastIndexOf(' ');
        // let regexNoSpace =/[\S]{3}$/;
        if(indxOfSpace >= 0){
            output = output.slice(0,indxOfSpace) + '...';
        }else if(indxOfSpace < 0){
            output = output.slice(0,n-3) + '...';
            
        }
        // if(regexSpace.test(output)){
        //     output = output.slice(-1) + '...';
        // }else{
        //     output = output + '...';
        // }
        return output;
    }

};


String.format = function (...params){
    let sequence = params[0].split(' ');
    let toChange = params.slice(1);

    sequence =  sequence.map((x,i)=>{
        if(/^{(\w+)}$/.test(x)){
            let indx = /^{(\w+)}$/.exec(x);
            if(toChange[Number(indx[1])]){
                x = toChange[Number(indx[1])];
                return x;
            }else {
                return x;
            }

        }else {
            return x;
        }

    });

    return sequence.join(' ');
    
};
})();
