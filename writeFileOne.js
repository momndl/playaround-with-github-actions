import { existsSync, writeFileSync, readFileSync } from "fs";

const FILENAME = "./place2b/lets-see.json";
const createForTest = "jajaja";
function randomNumber() {
    return Math.random() * 10;
}

export function writeFirstFile() {
    const randomObj = {
        first: { number: randomNumber() },
        second: { number: randomNumber() },
        third: { number: randomNumber() },
    };

    const secondObj = {
        fourth: { name: "ulf" },
    };

    const third = { ...randomObj, ...secondObj };

    console.log("randomObj: ", third);

    if (!existsSync(FILENAME)) writeFileSync(FILENAME, "{}");
    const data = JSON.parse(readFileSync(FILENAME, { encoding: "utf-8" }));
    const keys = Object.keys(third).forEach((key) => {
        data[key] = third[key];
    });

    writeFileSync(FILENAME, JSON.stringify(data));
}
