
// Input
let n = 7
let i = 0
let j = n-1

// let matrix = Array.from({length:n}, () => Array(n).fill(0))
let matrix = [[]]
for(let i=0;i<n;i++){
    matrix.push([])
    for(let j=0;j<n;j++){
        matrix[i].push(0)
    }
}


// Logic
while(i <= j){
    for(let l=i;l<=j;l++) matrix[i][l] = (i+1)
    for(let l=i;l<=j;l++) matrix[j][l] = (i+1)
    for(let l=i+1;l<j;l++) matrix[l][i] = (i+1)
    for(let l=i+1;l<j;l++) matrix[l][j] = (i+1)
    i += 1
    j -= 1
}

// Output
for(let i=0;i<n;i++){
    
    for(let j=0;j<n;j++){
        process.stdout.write(String(matrix[i][j]) + " ")
    }
    console.log()
}
console.log()

// -------------------------
n = 7
for(let i=1;i<n;i++){
    let temp = ""
    for(let j=1;j<n;j++){
        temp += ((i <= j && i <= n-i && i <= n-j) ? i : (j <= n-i && j <= n-j) ? j : (n-i <= n-j) ? n-i :n-j) + " "
    }
    console.log(temp)
}

