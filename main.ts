import { parse } from "https://deno.land/std@0.119.0/flags/mod.ts";

console.log("Deno.args", Deno.args);

const flags = parse(Deno.args, {
  boolean: ["help", "color"],
  string: ["version"],
  default: { color: true },
});

console.log("Wants help?", flags.help);
console.log("Version:", flags.version);
console.log("Wants color?:", flags.color);

console.log("Other:", flags._); // [ "Deno", "Sushi" ]
