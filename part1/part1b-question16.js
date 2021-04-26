let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let car in statistics){
    if (car.toString().startsWith('r') | statistics[car] % 2 == 1 ){
        console.log(`statistics.${car} : ${statistics[car]}`);
    } 
    
}