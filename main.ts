import settings from "./.vscode/settings.json" assert { type: "json" };

const configuration = await import("./deno.json", { assert: { type: "json" } });

console.log(settings["deno.enable"]);
console.log(configuration);
