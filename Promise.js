// Promises is an asynchronous task
// 3 states of promises pending -> fulfilled -> rejected

// Promises constructor for promises new Promise();

const myPromise = new Promise((resolve, reject) => {
  const user = null;
  if (!user) {
    reject("User is not available");
  } else {
    setTimeout(() => {
      resolve("User is available");
    }, 1000);
  }
});

/*
 JavaScript promises have three methods. catch(), finally(), and then() .
*/

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
