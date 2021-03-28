function juices(arrX){
    class Juicing{
        constructor(parcel){
            this.parcel = parcel;
            this.fruits = {};
            this.bottles = {};
        }
        checkAndBottle(){
            
            let manage = this.parcel.map((el) => el.split(' => '));
            
            for (let i of manage){
                let fruit = i[0];
                let quantity = Number(i[1]);
                if (Juicing.NoSuchKey(this.fruits, fruit)){
                    this.fruits[fruit] = 0;
                }
                this.fruits[fruit] += quantity
                if (this.fruits[fruit] >= 1000){                    
                    if (Juicing.NoSuchKey(this.bottles, fruit)){
                        this.bottles[fruit] = 0;
                    }
                    this.bottles[fruit] += Math.floor(this.fruits[fruit] / 1000);
                    this.fruits[fruit] %= 1000   ;                
                }
            }
            
        }

        static NoSuchKey(dictX, value){
            if ((Object.keys(dictX)).some((el) => el == value)){
                return false
            }
            return true
        }

        printBottles(){
            let result = ''
            for (let i in this.bottles){
                result += `${i} => ${this.bottles[i]}\n`;

            }
            return result.trim()
        }
        
    }

    let test = new Juicing(arrX);
    test.checkAndBottle();
    console.log(test.printBottles());
    
}
