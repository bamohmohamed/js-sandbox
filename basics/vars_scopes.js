// var varNum;
// console.log(`var ${varNum}`);
// console.log(`let ${letNum}`);

// // varNum = 7;
// var varNum = 7; // hoisted 
// let letNum = 6;

function test() {
    const constNum = 45;
    let letNum = 6;
    {
        var varNum = 7; // scoped to the whole function 
        // let letNum = 6; // visible only inside the block.
    }

    console.log(`var ${varNum}`);

    letNum = 77;
    // constNum = 54; // cannot be assigned.
    console.log(`let ${letNum}`);
    console.log(`const ${constNum}`);


    const arr = [1, 2, 3];
    // arr = [4, 5, 6] // arr is constant
    arr.push(7);
    console.log(arr);
}

test();