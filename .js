let getSleepHours = day => {
  if (day ==='monday'){
    return 8;
    } else if (day==='tuesday'){
       return 2;
    } else if (day==='wednesday'){
      return 7.9;
    } else if (day==='thursday'){
      return 8.4;
    } else if (day==='friday'){
      return 9;
    } else if (day==='saturday'){
      return 9.5;
    } else if (day==='sunday'){
      return 10;
    } else {console.log('Error. Please use a day of the week and check your spelling.')}
};
//Code above is for creating the function to get the sleep hours for each night of the week

let getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
//Code above for creating function to add sleep hours together

let getIdealSleepHours = () => idealHours = 8.5*7;

let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('You got just the right amount of sleep.')} else if (actualSleepHours > idealSleepHours){
      console.log(`You slept more than enough. You are over by ${actualSleepHours - idealSleepHours} hours. Be more productive.`)
    } else {
      console.log(`You are not sleeping enough. You are behind by ${idealSleepHours - actualSleepHours} hours. A tired mind means wasted time.`)
    }
}
calculateSleepDebt('tuesday');
