`use strict`

console.clear()

var arr = [1, 2, 3, 4, 5];
try {
    for(let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
} catch (e) {
    console.log("Error message: ", e);
} finally {
    console.log("=> Complete");
}

//? Call stack property
const trace = () => {
    try {
        throw new Error("Have an error occured: ");
    } catch(e) {
        console.log(e.stack);
    }
}

const second = () => trace();
const first = () => second(1, 'SEstudio', {});
first("Demo");