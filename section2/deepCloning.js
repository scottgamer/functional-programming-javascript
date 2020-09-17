const deepClone = (o) => JSON.parse(JSON.stringify(o));
const originalArray = ["hi", { on: true }];
const newArray = cloneArray(originalArray);
