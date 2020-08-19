

// amazon turnstile problem

/*
  arrTimes=    [0,1,1,3,3]
  directions = [0,1,0,0,1]

      0 0 0
            x ->
              1 1 1
  currentTime = 0
  lastDirection = 0
  Entrance Queue:
  [
    {
      index: 2,
      direction: 0
    },
    {
      index: 3,
      direction: 0
    }
  ]
  Exit Queue:
   [
    {
      index: 1,
      direction: 1
    },
    {
      index: 4,
      direction: 1
    }
  ]
  Dequeue: output[index] = current time
  [1, 0, 1, 1, 0, 0]
  [1, 1, 1, 0, 0, 0]
  [0, 0, 0, 1, 1, 1]
  sort by lastDirection, then index

  output:

*/


// function takes in: people, times, directions
function turnstile (people, arrTime, directions) {
  var p = 0;
  //create current direction variable, default to exit: 1
  var direction = 1;
  //create a current time variable, default to 0
  var currentTime = 0;
  //create an entrance and exit queue
  var entranceQueue = [];
  var exitQueue = [];
  //create the output array
  var output = [];

  var dequeue = () => {
      if (direction === 1) {
        if (exitQueue.length > 0) {
          output[exitQueue[0]] = currentTime;
          p++;
          exitQueue.shift();
          currentTime++;
        } else if (entranceQueue.length > 0) {
          direction = 0;
          output[entranceQueue[0]] = currentTime;
          p++;
          entranceQueue.shift();
          currentTime++;
        } else {
          currentTime++;
        }
      } else if (direction === 0) {
        if (entranceQueue.length > 0) {
          output[entranceQueue[0]] = currentTime;
          entranceQueue.shift();
          p++;
          currentTime++;
        } else if (exitQueue.length > 0) {
          direction = 1;
          output[exitQueue[0]] = currentTime;
          exitQueue.shift();
          p++;
          currentTime++;
        } else {
          direction = 1;
          currentTime++;
        }
      }
  }
  //iterate through the time

  var enqueue = () => {
    for (var i = p; i < arrTime.length; i++) {
      if (arrTime[i] === currentTime) {
        if (directions[i] === 0) {
          //console.log('entrance before adding: ', entranceQueue)
          entranceQueue.push(i);
          //console.log('entrance after adding: ', entranceQueue)
        } else {
          //console.log('exit before adding: ', exitQueue)
          exitQueue.push(i);
        }
      } else if (arrTime[i] > currentTime) {
        break;
      }
    }
  }

  while (p < people) {
    enqueue();
    dequeue();
  }
  return output;
}


// STEPS TO SOLVE
// set current time to 0
// check who arrives at current time
// If someone is trying to exit, they go first, otherwise start with first person
// Whoever didn't go, move them to a queue for time + 1
// incrememnt time
// check who arrives at the new time, add them to the queue
// check which direction turnstile was previously used
// move the first person in queue who wants to go in that direction through
// move everyone who didn't go to time + 1
//increement time


arrTimes=    [0,1,1,3,3]
directions = [0,1,0,0,1]

console.log(turnstile(5, arrTimes, directions))