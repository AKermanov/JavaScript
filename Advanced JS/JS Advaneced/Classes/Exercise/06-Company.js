class Company {
    constructor () {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        
        if(!username || !salary || !position || !department || Number(salary) < 0) {
            throw new Error("Invalid input!");
        }

       if (!this.departments[department]) {
           this.departments[department] = [];
        }
           this.departments[department].push({username: username, salary: Number(salary), position: position});

          return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let biggestAverage = 0;
        let bestDepartment = '';

        Object.entries(this.departments).forEach(([key, value]) => {
            let depAvgSalary = 0;
            value.forEach(employee => depAvgSalary += employee.salary);
            depAvgSalary /= value.length;
            if(depAvgSalary > biggestAverage) {
                biggestAverage = depAvgSalary;
                bestDepartment = key;
            }
        });

        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${biggestAverage.toFixed(2)}\n`;

        Object.values(this.departments[bestDepartment]).sort((a, b) => {
            let result = b.salary - a.salary;

            if(result === 0) {
                result = a.username.localeCompare(b.username);
            }
            return result;
        }).forEach(employee => result += `${employee.username} ${employee.salary} ${employee.position}\n`);
        
        return result.trim();
    }
}
