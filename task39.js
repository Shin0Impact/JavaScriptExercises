function centeredpyramid(rows){
    for (let i = 1; i <= rows; i++) {
        console.log(` `.repeat(rows - i) + `*`.repeat(2 * i - 1));//this is better than a nested loop from task28
    }
}

centeredpyramid(5);