import { existsSync, writeFileSync, readFileSync } from "fs";

import { combine } from "./combine.js";
import { writeFirstFile } from "./writeFileOne.js";
import { writeSecondFile } from "./writeFileTwo.js";
const FILENAME1 = "./place2b/lets-see.json";
const FILENAME2 = "./place2b/two.json";
const COMBINEDFILE = "./place2b/combined.json";

writeFirstFile();
writeSecondFile();

let testInfo1;
let testInfo2;
if (existsSync(FILENAME1) && existsSync(FILENAME2)) {
    testInfo2 = JSON.parse(readFileSync(FILENAME2, { encoding: "utf-8" }));
    testInfo1 = JSON.parse(readFileSync(FILENAME1, { encoding: "utf-8" }));
    combine(testInfo1, testInfo2);
}
