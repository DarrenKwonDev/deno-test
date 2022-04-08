console.log(Deno.env.get("PORT")); // undefined
Deno.env.set("my_secret", "I have a secret");

console.log(Deno.env.get("my_secret"));
console.log(Deno.env.toObject()); // get all env
