const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"]];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDate: (Date| string)[] = [new Date()]
importantDate.push("CCCCCCCCCC");
importantDate.push(new Date());
