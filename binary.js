function noisy(f) {
return (...args) => {
console.log("calling with", args);
let result = f(...args);
console.log("called with", args, ", returned", result);
return result;
};
}
noisy(Math.max)(3, 2, 1, -1, 0, 9, 89 , 98);
