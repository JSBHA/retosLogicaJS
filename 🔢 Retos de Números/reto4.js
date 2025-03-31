//📌 Reglas:Recibes una lista de pasajeros (cada uno con un peso en kg).


function groupPassengers(passengers, maxWeight) {
  return passengers.reduce((capacity, passenger) => {
    if (
      !capacity.length ||
      capacity[capacity.length - 1].reduce((a, b) => a + b, 0) +
        capacity +
        passenger >
        maxWeight
    ) {  
        capacity.push([passenger])
    }else{
        capacity[capacity.length - 1].push(passenger)
    }
    return capacity;
  }, []);
}

const passengers = [70, 50, 80, 40, 60, 90];
const maxWeight = 150;
console.log(groupPassengers(passengers, maxWeight))


