import fs from "fs";

const data = fs.readdirSync("g://adventure time/", { recursive: true });

console.log(data);
