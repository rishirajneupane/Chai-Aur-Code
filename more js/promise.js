const promiseOne = new Promise(function (resolve, reject) {
  //Do an async Task
  //DB calls , cryptography ,network
  setTimeout(function () {
    console.log(`Async task is complete`);
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async Task Two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" }); //array,fn,object j ni pass garna milxa
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "rishi", password: "rrn123" });
    } else {
      reject(`Error:something went wrong`);
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected "));

//
//

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "rajarshi", password: "rn123" });
    } else {
      reject(`Error:Attention went wrong`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  const response = await promiseFive; //object vayera promise () yo nalekheko
  console.log(response);
}
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users') //dont use prettier here it convert in to string"
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
