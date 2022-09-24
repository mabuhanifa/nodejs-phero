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

async function getData() {
  const res = await myPromise;
  console.log(res);
}

getData();

async function getUser() { 
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}
