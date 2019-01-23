var arr  = [[1,2,3], [4,5,6], [7,8,9]];
var A  = [[], [], []];
/*console.log(arr);
for( i = 0 ; i < arr.length ; i ++){
    for(j = 0; j < arr[i].length; j++){
        A[arr.length - 1 - j].push(arr[i][j]);
   
    }
}*/
/*-------------------using for each------------------------*/
arr.forEach((item1, index1) =>{
    item1.forEach((item2, index2) => {
        A[arr.length - 1 - index2].push(arr[index1][index2]);
    })
})
console.log(A);