    class Person{
        constructor(firstName, lastName){
            this.firstName = firstName,
            this.lastName = lastName
            
        }
        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
        set fullName(name){
            let token = name.split(' ');
            if (token.length > 1) {
                this.firstName = token[0];
                this.lastName = token[1];
            }
        }
    }
