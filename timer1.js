//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
// process.stdout.write('\x07') --> beep sound
// Input = process.argv
// Output = beep sound
// PROCESS:
// Create a function that takes in process.argv input as parameter
// setTimeout - where the code is process.stdout.write('\x07'), and the delay is incremented by the the input
// if input is 1, it needs to translate into 1000ms so 1000 * input = ms

// EDGE CASES
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number. 

const args = process.argv.slice(2);

const timer = function(input) {

  // If input is a negative number or not a number, skip.
  if (input < 1 || isNaN(input)) {
    return;
  };

  for (let time = 0; time < input.length; time++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, input[time] * 1000);
  }
};

timer(args);

//node timer1.js 10 3 5 15 9

