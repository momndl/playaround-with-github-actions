import { existsSync, writeFileSync, readFileSync } from "fs";

const COMBINEDFILE = "./place2b/combined.json";

export function combine(obj1, obj2) {
    const combined = Object.assign(obj1, obj2);

    if (!existsSync(COMBINEDFILE)) writeFileSync(COMBINEDFILE, "{}");
    const data = JSON.parse(readFileSync(COMBINEDFILE, { encoding: "utf-8" }));
    const keys = Object.keys(combined).forEach((key) => {
        data[key] = combined[key];
    });

    writeFileSync(COMBINEDFILE, JSON.stringify(data));
}
