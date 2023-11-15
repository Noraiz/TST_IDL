// - 1.2 Promises , write the orders which logs show us

// change it to false, to return rejection from promise
const promiseState = true;
const promise = new Promise((resolve, reject) => {
  if (promiseState) resolve("pass");
  reject("failed");
});

promise
  .then((result) => console.log("on success", result))
  .catch((err) => console.log("on catch", err))
  .finally(() => console.log("always runs"));
