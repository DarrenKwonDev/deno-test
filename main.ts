const obj = {
  name: "haha",
  age: 23,
  items: ["a", "b", "c"],
  toJSON: function () {
    return "seriailized";
  },
};
const txt = JSON.stringify(obj);
console.log(txt);
