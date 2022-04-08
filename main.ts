const id = setInterval(() => console.log("interval"), 1000);

setTimeout(() => {
  clearInterval(id);
}, 3000);

new Promise(() =>
  setTimeout(() => {
    console.log("after 5 secs");
  }, 5000)
);
