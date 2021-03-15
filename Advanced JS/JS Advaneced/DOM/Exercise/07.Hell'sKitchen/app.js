function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    let arr = JSON.parse(document.querySelector('#inputs textarea').value);
    let bestRestaurant = findBestRestaurant(arr);
    document.querySelector('#bestRestaurant>p').textContent = getMsgRest(
      bestRestaurant
    );
    document.querySelector('#workers>p').textContent = getMsgEmp(
      bestRestaurant.workers
    );
  }

  function findAllRestaurants(arr) {
    //return array of objects
    let restaurants = [];
    for (let i = 0; i < arr.length; i++) {
      let [restName, w] = arr[i].split(' - ');
      let workers = w.split(', ');
      let hasRestName = false;
      for (let j = 0; j < restaurants.length; j++) {
        if (restaurants[j].name == restName) {
          hasRestName = true;

          for (let k = 0; k < workers.length; k++) {
            let [worker, salary] = workers[k].split(' ');
            salary = Number(salary);
            restaurants[j].sumSalaries += salary;
            if (salary > restaurants[j].bestSalary) {
              restaurants[j].bestSalary = salary;
            }
            restaurants[j].workers.push({ worker, salary });
          }
          break;
        }
      }
      if (hasRestName == false) {
        let rest = {
          name: '',
          sumSalaries: 0,
          bestSalary: 0,
          workers: [],
        };
        rest.name = restName;

        for (let j = 0; j < workers.length; j++) {
          let [worker, salary] = workers[j].split(' ');
          salary = Number(salary);
          rest.workers.push({ worker, salary });
          rest.sumSalaries += salary;
          if (salary > rest.bestSalary) {
            rest.bestSalary = salary;
          }
        }
        restaurants.push(rest);
      }
    }
    return restaurants;
  }

  function findBestRestaurant(arr) {
    //return object
    let allRest = findAllRestaurants(arr);
    let bestRestaurant = {
      name: '',
      avgSalary: 0,
      bestSalary: 0,
      workers: [],
    };
    let currAvgSalary = 0;
    let currAvgIndex = 0;
    for (let i = 0; i < allRest.length; i++) {
      let nextAvgSalary = allRest[i].sumSalaries / allRest[i].workers.length;

      if (currAvgSalary < nextAvgSalary) {
        currAvgSalary = nextAvgSalary;
        currAvgIndex = i;
        bestRestaurant.name = allRest[i].name;
        bestRestaurant.avgSalary = currAvgSalary;
        bestRestaurant.bestSalary = allRest[i].bestSalary;
        bestRestaurant.workers = allRest[i].workers.sort((a, b) => {
          return b.salary - a.salary;
        });
      } else if (currAvgSalary == nextAvgSalary && currAvgIndex < i) {
        continue;
      }
    }
    return bestRestaurant;
  }

  function getMsgRest(bestRestObj) {
    return `Name: ${
      bestRestObj.name
    } Average Salary: ${bestRestObj.avgSalary.toFixed(
      2
    )} Best Salary: ${bestRestObj.bestSalary.toFixed(2)}`;
  }

  function getMsgEmp(workersArr) {
    return workersArr
      .map(w => `Name: ${w.worker} With Salary: ${w.salary}`)
      .join(' ');
  }
}
