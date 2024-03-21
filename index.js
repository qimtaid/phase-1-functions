function exerciseDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    console.log(`Leash ${dogName} the ${dogBreed}`);
    console.log(`Walk to the park ${dogName} the ${dogBreed}`);
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    console.log(`Unleash ${dogName} the ${dogBreed}`);
  }



  exerciseDog("Boo", "puggle");
  exerciseDog("Jojo", "mutt");
  exerciseDog("Emmeline", "bernedoodle");

  function exerciseDog(dogName="ERROR the Broken Dog", dogBreed="Sick Puppy") {

    const weatherToday = "Rainy";

function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`;
}

const result = exerciseDog("Byron", "poodle");
console.log(result); // => "Byron did not exercise due to rain"


function functionName(parameter1, parameter2, parameter3) {
    // body code goes here
  }