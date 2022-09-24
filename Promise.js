// Promises is an asynchronous task
// 3 states of promises pending -> fulfilled -> rejected

// Promises constructor for promises new Promise();

const myPromise = new Promise((resolve, reject) => {
  const user = { id: 1, email: "user@example.com" };

  if (!user) {
    reject("User is not available");
  } else {
    setTimeout(() => {
      resolve({ id: 1, email: "user@example.com" });
    }, 500);
  }
});

const userIds = [1, 2, 3, 4, 5];

let userData = [];

// for (let i = 0; i < userIds.length; i++) {
//   const userId = userIds[i];
//   myPromise.then((user) => {
    //     userData.push(user);
    //   });

    for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    userData.push(myPromise);
}

Promise.all(userData).then((res) => console.log(res));

console.log(userData); // userData is not available until myPromise is resolved

/*
 JavaScript promises have three methods. catch(), finally(), and then() .
*/

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
