let demT = 0;
let demD = 0;
for(let num=0; num<=6; num++) {
  if (num >= 3){
    demT++;
  }
  else {
    demD++;
  }
}
console.log(`a. Số lượng số nửa trên của 6 là ${demT} và số lượng số nửa dưới của 6 là ${demD}`);
demD = 0;
demT = 0;
let n = prompt('Hãy nhập số n');
for(let nub=0; nub<=n; nub++) {
  if (nub >= Math.floor(n/2)){
    demT++;
  }
  else {
    demD++;
  }
}
console.log(`b. Số lượng số nửa trên của ${n} là ${demT} và số lượng số nửa dưới của ${n} là ${demD}`);

console.log('c.');
for(let i=0; i<=7; i++){
  console.log(0);
  console.log(1);
}

console.log('d.');
let m = prompt ('Nhập vào số m');
for(let i=0; i<=m; i++){
  console.log(0);
  console.log(1);
}