import { existsSync, writeFileSync, readFileSync } from "fs";

const FILENAME = "./place2b/two.json";

function randomNumber() {
    return Math.random() * 10;
}

export function writeSecondFile() {
    const randomObj = {
        i: { number: randomNumber() },
        like: { number: randomNumber() },
        turtles: { number: randomNumber() },
    };

    const secondObj = {
        iAmAKey: { name: "ulf" },
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
